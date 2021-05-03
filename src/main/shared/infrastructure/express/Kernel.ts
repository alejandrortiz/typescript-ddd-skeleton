import bodyParser from 'body-parser';
import compress from 'compression';
import express, {Request, Response, Router} from 'express';
import * as http from 'http';
import helmet from "helmet";
import errorHandler from "errorhandler";
import httpStatus from "http-status";
import {DiContainer} from "../di/DiContainer";
import {Logger} from "../../domain/Logger";
import {Nullable} from "../../domain/Null";

export abstract class Kernel {
    private server: express.Express;

    private _httpServer: Nullable<http.Server>;
    private container: DiContainer;

    private logger: Logger;

    constructor(protected readonly _env: string, protected readonly _port: string) {
        this._httpServer = null;

        // Express application
        this.server = express();
        // Compression
        this.server.use(compress());
        // BodyParser for the body requests
        this.server.use(bodyParser.json());
        this.server.use(bodyParser.urlencoded({extended: true}));
        // Security
        this.server.use(helmet.xssFilter());
        this.server.use(helmet.noSniff());
        this.server.use(helmet.hidePoweredBy());
        this.server.use(helmet.frameguard({action: 'deny'}));

        // Container configuration
        this.container = this.configureContainer();

        // Routes configuration
        const router = Router();
        router.use(errorHandler());
        this.configureRoutes(router);
        this.server.use(router);

        router.use((error: Error, request: Request, response: Response, next: Function) => {
            this.logger.error(error.message);

            response.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                error: {
                    message: error.message,
                    stack: error.stack
                }
            });
        });

        this.logger = this.container.get('Shared.Logger');
    }

    protected abstract configureRoutes(router: Router): void;

    protected abstract configureContainer(): DiContainer;

    async start() {
        return this.listen();
    }

    private async listen(): Promise<void> {
        return new Promise(resolve => {
            this._httpServer = this.server.listen(this.port, () => {
                this.logger.info(`Application is running at http://localhost:${this._port} in ${this._env} mode`);
                this.logger.info('  Press CTRL-C to stop\n');
                resolve();
            })
        })
    }

    async stop(): Promise<void> {
        return new Promise(((resolve, reject) => {
            if (this._httpServer) {
                this._httpServer.close(error => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve();
                })
            }

            return resolve();
        }));
    }

    get httpServer(): Nullable<http.Server> {
        return this._httpServer;
    }

    public port(): string {
        return this._port;
    }
}

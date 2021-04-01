import bodyParser from 'body-parser';
import compress from 'compression';
import express, {Request, Response, Router} from 'express';
import * as http from 'http';
import helmet from "helmet";
import errorHandler from "errorhandler";
import httpStatus from "http-status";
import {Container} from "../di/Container";
import {Logger} from "../../domain/Logger";

export abstract class Kernel {
    private server: express.Express;

    protected readonly environment: string;
    protected readonly port: string;

    private _httpServer: http.Server | null;
    private logger: Logger;

    constructor(environment: string, port: string) {
        this.environment = environment;
        this.port = port;

        this._httpServer = null;
        this.logger = Container.instance().get('logger');

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
        this.configureContainer();
        // Routes configuration
        const router = Router();
        router.use(errorHandler());
        this.configureRoutes(router);
        this.server.use(router);

        router.use((error: Error, request: Request, response: Response, next: Function) => {
            this.logger.error(error.message);
            response.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
        });
    }

    protected abstract configureRoutes(router: Router): void;

    protected abstract configureContainer(): void;

    async start() {
        return this.listen();
    }

    private async listen(): Promise<void> {
        return new Promise(resolve => {
            this._httpServer = this.server.listen(this.port, () => {
                this.logger.info(`Application is running at http://localhost:${this.port} in ${this.environment} mode`);
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

    get httpServer(): http.Server | null {
        return this._httpServer;
    }
}

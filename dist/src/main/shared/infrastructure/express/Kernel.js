"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kernel = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const express_1 = __importDefault(require("express"));
const awilix_express_1 = require("awilix-express");
const helmet_1 = __importDefault(require("helmet"));
class Kernel {
    constructor(environment, port) {
        this._httpServer = null;
        this.environment = environment;
        this.port = port;
        // Express application
        this.server = express_1.default();
        // Compression
        this.server.use(compression_1.default());
        // BodyParser for the body requests
        this.server.use(body_parser_1.default.json());
        this.server.use(body_parser_1.default.urlencoded({ extended: true }));
        // Security
        this.server.use(helmet_1.default.xssFilter());
        this.server.use(helmet_1.default.noSniff());
        this.server.use(helmet_1.default.hidePoweredBy());
        this.server.use(helmet_1.default.frameguard({ action: 'deny' }));
        // Container configuration
        this.server.use(awilix_express_1.scopePerRequest(this.configureServices()));
        // Routes configuration
        this.server.use(this.configureRoutes());
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.listen();
        });
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this._httpServer = this.server.listen(this.port, () => {
                    // this.logger.info(`Application is running at http://localhost:${this.port} in ${this.environment} mode`);
                    console.log(`Application is running at http://localhost:${this.port} in ${this.environment} mode`);
                    // this.logger.info('  Press CTRL-C to stop\n');
                    console.log('  Press CTRL-C to stop\n');
                    resolve();
                });
            });
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => {
                if (this._httpServer) {
                    this._httpServer.close(err => {
                        if (err) {
                            return reject(err);
                        }
                        return resolve();
                    });
                }
                return resolve();
            }));
        });
    }
    get httpServer() {
        return this._httpServer;
    }
}
exports.Kernel = Kernel;

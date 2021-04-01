"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationKernel = void 0;
const awilix_express_1 = require("awilix-express");
const Kernel_1 = require("../main/shared/infrastructure/express/Kernel");
const awilix_1 = require("awilix");
class ApplicationKernel extends Kernel_1.Kernel {
    configureRoutes() {
        return awilix_express_1.loadControllers('controller/**/*.ts', { cwd: __dirname });
    }
    configureServices() {
        const container = awilix_1.createContainer({ injectionMode: awilix_1.InjectionMode.CLASSIC });
        container.register(require('./config/services'));
        return container;
    }
}
exports.ApplicationKernel = ApplicationKernel;

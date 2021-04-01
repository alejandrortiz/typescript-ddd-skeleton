"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const WinstonLogger_1 = require("../../main/shared/infrastructure/logger/WinstonLogger");
const InMemoryCommandBus_1 = require("../../main/shared/infrastructure/bus/command/InMemoryCommandBus");
const InMemoryQueryBus_1 = require("../../main/shared/infrastructure/bus/query/InMemoryQueryBus");
const financial = __importStar(require("../../main/financial/shared/infrastructure/awilix/dependency-injection/services"));
exports.default = (Object.assign({ logger: awilix_1.asClass(WinstonLogger_1.WinstonLogger).singleton(), commandBus: awilix_1.asClass(InMemoryCommandBus_1.InMemoryCommandBus).singleton(), queryBus: awilix_1.asClass(InMemoryQueryBus_1.InMemoryQueryBus).singleton() }, financial));

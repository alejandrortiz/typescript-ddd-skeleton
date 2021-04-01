"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinstonLogger = void 0;
const winston_1 = __importDefault(require("winston"));
var Levels;
(function (Levels) {
    Levels["DEBUG"] = "debug";
    Levels["ERROR"] = "error";
    Levels["INFO"] = "info";
    Levels["CRITICAL"] = "critical";
    Levels["EMERGENCY"] = "emergency";
    Levels["ALERT"] = "alert";
    Levels["NOTICE"] = "notice";
    Levels["WARNING"] = "warning";
})(Levels || (Levels = {}));
class WinstonLogger {
    constructor() {
        this.logger = winston_1.default.createLogger({
            format: winston_1.default.format.combine(winston_1.default.format.prettyPrint(), winston_1.default.format.errors({ stack: true }), winston_1.default.format.splat(), winston_1.default.format.colorize(), winston_1.default.format.simple()),
            transports: [
                new winston_1.default.transports.Console(),
                new winston_1.default.transports.File({ filename: `logs/${Levels.DEBUG}.log`, level: Levels.DEBUG }),
                new winston_1.default.transports.File({ filename: `logs/${Levels.ERROR}.log`, level: Levels.ERROR }),
                new winston_1.default.transports.File({ filename: `logs/${Levels.INFO}.log`, level: Levels.INFO }),
                new winston_1.default.transports.File({ filename: `logs/${Levels.CRITICAL}.log`, level: Levels.CRITICAL }),
                new winston_1.default.transports.File({ filename: `logs/${Levels.EMERGENCY}.log`, level: Levels.EMERGENCY }),
                new winston_1.default.transports.File({ filename: `logs/${Levels.ALERT}.log`, level: Levels.ALERT }),
                new winston_1.default.transports.File({ filename: `logs/${Levels.NOTICE}.log`, level: Levels.NOTICE }),
                new winston_1.default.transports.File({ filename: `logs/${Levels.WARNING}.log`, level: Levels.WARNING }),
            ]
        });
    }
    critical(message) {
        this.logger.crit(message);
    }
    debug(message) {
        this.logger.debug(message);
    }
    emergency(message) {
        this.logger.emerg(message);
    }
    error(message) {
        this.logger.error(message);
    }
    info(message) {
        this.logger.info(message);
    }
    alert(message) {
        this.logger.alert(message);
    }
    notice(message) {
        this.logger.notice(message);
    }
    warning(message) {
        this.logger.warning(message);
    }
}
exports.WinstonLogger = WinstonLogger;

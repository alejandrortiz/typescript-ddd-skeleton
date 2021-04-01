import {Logger} from "../../domain/Logger";
import winston, {Logger as WinstonLoggerType} from "winston";

enum Levels {
    DEBUG = 'debug',
    ERROR = 'error',
    INFO = 'info',
    CRITICAL = 'critical',
    EMERGENCY = 'emergency',
    ALERT = 'alert',
    NOTICE = 'notice',
    WARNING = 'warning',
}

export class WinstonLogger implements Logger {
    private logger: WinstonLoggerType;

    constructor() {
        this.logger = winston.createLogger({
            format: winston.format.combine(
                winston.format.prettyPrint(),
                winston.format.errors({stack: true}),
                winston.format.splat(),
                winston.format.colorize(),
                winston.format.simple()
            ),
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({filename: `logs/${Levels.DEBUG}.log`, level: Levels.DEBUG}),
                new winston.transports.File({filename: `logs/${Levels.ERROR}.log`, level: Levels.ERROR}),
                new winston.transports.File({filename: `logs/${Levels.INFO}.log`, level: Levels.INFO}),
                new winston.transports.File({filename: `logs/${Levels.CRITICAL}.log`, level: Levels.CRITICAL}),
                new winston.transports.File({filename: `logs/${Levels.EMERGENCY}.log`, level: Levels.EMERGENCY}),
                new winston.transports.File({filename: `logs/${Levels.ALERT}.log`, level: Levels.ALERT}),
                new winston.transports.File({filename: `logs/${Levels.NOTICE}.log`, level: Levels.NOTICE}),
                new winston.transports.File({filename: `logs/${Levels.WARNING}.log`, level: Levels.WARNING}),
            ]
        });
    }

    critical(message: string): void {
        this.logger.crit(message);
    }

    debug(message: string): void {
        this.logger.debug(message);
    }

    emergency(message: string): void {
        this.logger.emerg(message);
    }

    error(message: string): void {
        this.logger.error(message);
    }

    info(message: string): void {
        this.logger.info(message);
    }

    alert(message: string): void {
        this.logger.alert(message);
    }

    notice(message: string): void {
        this.logger.notice(message);
    }

    warning(message: string): void {
        this.logger.warning(message);
    }
}

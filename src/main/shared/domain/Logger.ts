export interface Logger {
    info(message: string): void;

    debug(message: string): void;

    notice(message: string): void;

    warning(message: string): void;

    error(message: string): void;

    critical(message: string): void;

    alert(message: string): void;

    emergency(message: string): void;
}

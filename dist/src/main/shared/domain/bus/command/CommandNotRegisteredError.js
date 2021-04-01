"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandNotRegisteredError = void 0;
class CommandNotRegisteredError extends Error {
    constructor(command) {
        super(`The command <${command.constructor.name}> hasn't a command handler associated`);
    }
}
exports.CommandNotRegisteredError = CommandNotRegisteredError;

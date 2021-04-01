"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandHandlers = void 0;
const CommandNotRegisteredError_1 = require("../../../domain/bus/command/CommandNotRegisteredError");
class CommandHandlers {
    constructor(commandHandlers) {
        this.commandHandlersMap = this.formatHandlers(commandHandlers);
    }
    formatHandlers(commandHandlers) {
        const handlersMap = new Map();
        commandHandlers.forEach(commandHandler => {
            handlersMap.set(commandHandler.subscribedTo(), commandHandler);
        });
        return handlersMap;
    }
    search(command) {
        const commandHandler = this.commandHandlersMap.get(command.constructor);
        if (!commandHandler) {
            throw new CommandNotRegisteredError_1.CommandNotRegisteredError(command);
        }
        return commandHandler;
    }
}
exports.CommandHandlers = CommandHandlers;

import {Command} from "../../../domain/bus/command/Command";
import {CommandHandler} from "../../../domain/bus/command/CommandHandler";
import {CommandNotRegisteredError} from "../../../domain/bus/command/CommandNotRegisteredError";

export class CommandHandlers {
    private commandHandlersMap: Map<Command, CommandHandler<Command>>;

    constructor(commandHandlers: Array<CommandHandler<Command>>) {
        this.commandHandlersMap = this.formatHandlers(commandHandlers);
    }

    private formatHandlers(commandHandlers: Array<CommandHandler<Command>>): Map<Command, CommandHandler<Command>> {
        const handlersMap = new Map();

        commandHandlers.forEach(commandHandler => {
            handlersMap.set(commandHandler.subscribedTo(), commandHandler);
        })

        return handlersMap;
    }

    public search(command: Command): CommandHandler<Command> {
        const commandHandler = this.commandHandlersMap.get(command.constructor);

        if (!commandHandler) {
            throw new CommandNotRegisteredError(command);
        }

        return commandHandler;
    }
}

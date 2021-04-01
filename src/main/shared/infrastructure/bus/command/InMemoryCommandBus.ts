import {CommandBus} from "../../../domain/bus/command/CommandBus";
import {Command} from "../../../domain/bus/command/Command";
import {CommandHandlers} from "./CommandHandlers";

export class InMemoryCommandBus implements CommandBus {
    constructor(private commandHandlers: CommandHandlers) {
    }

    async dispatch(command: Command): Promise<void> {
        const handler = this.commandHandlers.search(command);

        await handler.handle(command);
    }

}

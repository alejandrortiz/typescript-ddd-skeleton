import {AccountCreator} from "./AccountCreator";
import {CreateAccountCommand} from "./CreateAccountCommand";
import {CommandHandler} from "../../../../shared/domain/bus/command/CommandHandler";
import {Command} from "../../../../shared/domain/bus/command/Command";

export class CreateAccountCommandHandler implements CommandHandler<CreateAccountCommand> {
    private creator: AccountCreator;

    constructor(creator: AccountCreator) {
        this.creator = creator;
    }

    async handle(command: CreateAccountCommand): Promise<void> {
        this.creator.create(command.id, command.name);
    }

    subscribedTo(): Command {
        return CreateAccountCommand;
    }
}

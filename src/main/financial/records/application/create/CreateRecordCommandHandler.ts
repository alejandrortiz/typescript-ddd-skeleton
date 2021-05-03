import {CommandHandler} from "../../../../shared/domain/bus/command/CommandHandler";
import {CreateRecordCommand} from "./CreateRecordCommand";
import {Command} from "../../../../shared/domain/bus/command/Command";
import {RecordCreator} from "./RecordCreator";

export class CreateRecordCommandHandler implements CommandHandler<CreateRecordCommand> {
    constructor(private readonly creator: RecordCreator) {
    }

    async handle(command: CreateRecordCommand): Promise<void> {
        await this.creator.create(
            command.id,
            command.type,
            command.date,
            command.concept,
            command.amount,
            command.currency,
            command.accountId,
            command.recordCategoryId
        );
    }

    subscribedTo(): Command {
        return CreateRecordCommand;
    }

}

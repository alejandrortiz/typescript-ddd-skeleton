import {Command} from "../../../../shared/domain/bus/command/Command";

export class CreateRecordCommand implements Command {
    constructor(
        readonly id: string,
        readonly type: string,
        readonly date: string,
        readonly concept: string,
        readonly amount: number,
        readonly currency: string,
        readonly accountId: string,
        readonly recordCategoryId: string
    ) {
    }
}

import {RecordRepository} from "../../domain/RecordRepository";
import {Record} from "../../domain/Record";

export class RecordCreator {
    constructor(private readonly repository: RecordRepository) {
    }

    async create(
        id: string,
        type: string,
        date: string,
        concept: string,
        amount: number,
        currency: string,
        accountId: string,
        recordCategoryId: string
    ): Promise<void> {
        const record = Record.create(id, type, date, concept, amount, currency, accountId, recordCategoryId);

        await this.repository.save(record);
    }
}

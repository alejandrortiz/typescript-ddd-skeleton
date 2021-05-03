import {RecordRepository} from "../../domain/RecordRepository";
import {Record} from "../../domain/Record";
import {RecordId} from "../../domain/RecordId";
import {RecordNotFound} from "../../domain/RecordNotFound";

export class RecordFinder {
    constructor(private repository: RecordRepository) {
    }

    async find(id: string): Promise<Record> {
        const recordId = new RecordId(id);

        const response = await this.repository.search(recordId);

        if (null === response ) {
            throw new RecordNotFound(recordId);
        }

        return response;
    }
}

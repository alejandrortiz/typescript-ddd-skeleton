import {SequelizeRepository} from "../../../../shared/infrastructure/persistence/sequelize/SequelizeRepository";
import {Record} from "../../domain/Record";
import {RecordRepository} from "../../domain/RecordRepository";
import {RecordId} from "../../domain/RecordId";
import {Nullable} from "../../../../shared/domain/Null";
import {init, RecordModel} from "./sequelize/Record.model";
import {ModelCtor} from "sequelize/types/lib/model";

export class SequelizeRecordRepository extends SequelizeRepository<RecordModel> implements RecordRepository {
    async save(record: Record): Promise<void> {
        await this.model().upsert(record.toPrimitives());
    }

    async search(id: RecordId): Promise<Nullable<Record>> {
        const record = await this.model().findOne({where: {id: id.value}});

        return record ? SequelizeRecordRepository.getRecord(record) : null;
    }

    private static getRecord(record: RecordModel): Record {
        return Record.fromPrimitives({
            id: record.id,
            type: record.type,
            date: record.date.toString(),
            concept: record.concept,
            amount: record.amount,
            currency: record.currency,
            accountId: record.accountId,
            recordCategoryId: record.recordCategoryId
        });
    }

    protected model(): ModelCtor<RecordModel> {
        return init(this.client());
    }
}

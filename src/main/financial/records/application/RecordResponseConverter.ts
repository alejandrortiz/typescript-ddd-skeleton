import {Record} from "../domain/Record";
import {RecordResponse} from "./RecordResponse";

export class RecordResponseConverter {
    static toResponse(record: Record): RecordResponse {
        return new RecordResponse(
            record.id.value,
            record.type.value,
            record.date.value,
            record.concept.value,
            record.amount.value,
            record.currency.value,
            record.accountId.value,
            record.recordCategoryId.value
        );
    }
}

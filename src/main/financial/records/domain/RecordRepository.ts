import {Nullable} from "../../../shared/domain/Null";
import {Record} from "./Record";
import {RecordId} from "./RecordId";

export interface RecordRepository {
    save(record: Record): Promise<void>;

    search(id: RecordId): Promise<Nullable<Record>>;
}

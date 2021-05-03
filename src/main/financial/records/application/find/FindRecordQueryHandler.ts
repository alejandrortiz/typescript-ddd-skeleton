import {RecordResponse} from "../RecordResponse";
import {RecordFinder} from "./RecordFinder";
import {Command} from "../../../../shared/domain/bus/command/Command";
import {RecordResponseConverter} from "../RecordResponseConverter";
import {Query} from "../../../../shared/domain/bus/query/Query";
import {QueryHandler} from "../../../../shared/domain/bus/query/QueryHandler";

export class FindRecordQuery implements Query {
    constructor(readonly id: string) {
    }
}

export class FindRecordQueryHandler implements QueryHandler<FindRecordQuery, RecordResponse> {
    constructor(private readonly finder: RecordFinder) {
    }

    async handle(query: FindRecordQuery): Promise<RecordResponse> {
        const record = await this.finder.find(query.id);

        return RecordResponseConverter.toResponse(record);
    }

    subscribedTo(): Command {
        return FindRecordQuery;
    }
}

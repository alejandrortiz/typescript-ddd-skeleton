import {Response} from "../../../shared/domain/bus/query/Response";

export class RecordResponse implements Response {
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

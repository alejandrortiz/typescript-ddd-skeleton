import {Query} from "../../../../shared/domain/bus/query/Query";

export class FindAccountQuery implements Query {
    constructor(readonly id: string) {
    }
}

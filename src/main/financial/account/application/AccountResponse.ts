import {Response} from "../../../shared/domain/bus/query/Response";

export class AccountResponse implements Response {
    constructor(readonly id: string, readonly name: string) {
    }
}

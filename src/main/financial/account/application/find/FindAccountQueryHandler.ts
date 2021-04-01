import {QueryHandler} from "../../../../shared/domain/bus/query/QueryHandler";
import {AccountFinder} from "./AccountFinder";
import {FindAccountQuery} from "./FindAccountQuery";
import {AccountResponseConverter} from "../AccountResponseConverter";
import {Query} from "../../../../shared/domain/bus/query/Query";
import {AccountResponse} from "../AccountResponse";

export class FindAccountQueryHandler implements QueryHandler<FindAccountQuery, AccountResponse> {
    constructor(private finder: AccountFinder) {
    }

    subscribedTo(): Query {
        return FindAccountQuery;
    }

    async handle(query: FindAccountQuery): Promise<AccountResponse> {
        let account = await this.finder.find(query.id)

        return AccountResponseConverter.toResponse(account) as Promise<AccountResponse>;
    }

}

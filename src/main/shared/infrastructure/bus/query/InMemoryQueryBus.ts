import {Query} from "../../../domain/bus/query/Query";
import {Response} from "../../../domain/bus/query/Response";
import {QueryBus} from "../../../domain/bus/query/QueryBus";
import {QueryHandlers} from "./QueryHandlers";

export class InMemoryQueryBus implements QueryBus {
    constructor(private queryHandlers: QueryHandlers) {
    }

    async ask<R extends Response>(query: Query): Promise<R> {
        const handler = this.queryHandlers.search(query);

        return handler.handle(query) as Promise<R>;
    }

}

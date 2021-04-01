import {Query} from "../../../domain/bus/query/Query";
import {Response} from "../../../domain/bus/query/Response";
import {QueryHandler} from "../../../domain/bus/query/QueryHandler";
import {QueryNotRegistered} from "../../../domain/bus/query/QueryNotRegistered";

export class QueryHandlers {
    private queryHandlersMap: Map<Query, QueryHandler<Query, Response>>;

    constructor(queryHandlers: Array<QueryHandler<Query, Response>>) {
        this.queryHandlersMap = this.formatHandlers(queryHandlers);
    }

    private formatHandlers(
        queryHandlers: Array<QueryHandler<Query, Response>>
    ): Map<Query, QueryHandler<Query, Response>> {
        const handlersMap = new Map();

        queryHandlers.forEach(queryHandler => {
            handlersMap.set(queryHandler.subscribedTo(), queryHandler);
        });

        return handlersMap;
    }

    public search(query: Query): QueryHandler<Query, Response> {
        const queryHandler = this.queryHandlersMap.get(query.constructor);

        if (!queryHandler) {
            throw new QueryNotRegistered(query);
        }

        return queryHandler;
    }
}

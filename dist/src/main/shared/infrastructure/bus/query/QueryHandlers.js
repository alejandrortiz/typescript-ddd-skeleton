"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryHandlers = void 0;
const QueryNotRegistered_1 = require("../../../domain/bus/query/QueryNotRegistered");
class QueryHandlers {
    constructor(queryHandlers) {
        this.queryHandlersMap = this.formatHandlers(queryHandlers);
    }
    formatHandlers(queryHandlers) {
        const handlersMap = new Map();
        queryHandlers.forEach(queryHandler => {
            handlersMap.set(queryHandler.subscribedTo(), queryHandler);
        });
        return handlersMap;
    }
    search(query) {
        const queryHandler = this.queryHandlersMap.get(query.constructor);
        if (!queryHandler) {
            throw new QueryNotRegistered_1.QueryNotRegistered(query);
        }
        return queryHandler;
    }
}
exports.QueryHandlers = QueryHandlers;

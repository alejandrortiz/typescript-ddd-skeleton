"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryNotRegistered = void 0;
class QueryNotRegistered extends Error {
    constructor(query) {
        super(`The query <${query.constructor.name}> hasn't a query handler associated`);
    }
}
exports.QueryNotRegistered = QueryNotRegistered;

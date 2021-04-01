"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountNotFound = void 0;
const DomainError_1 = require("../../../shared/domain/DomainError");
class AccountNotFound extends DomainError_1.DomainError {
    constructor(id) {
        super();
        this._id = id;
    }
    errorCode() {
        return 'account_not_found';
    }
    errorMessage() {
        return `The account <${this._id.value}> is not found`;
    }
}
exports.AccountNotFound = AccountNotFound;

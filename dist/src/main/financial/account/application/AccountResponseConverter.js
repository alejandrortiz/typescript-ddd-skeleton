"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountResponseConverter = void 0;
const AccountResponse_1 = require("./AccountResponse");
class AccountResponseConverter {
    static toResponse(account) {
        return new AccountResponse_1.AccountResponse(account.id.value, account.name.value);
    }
}
exports.AccountResponseConverter = AccountResponseConverter;

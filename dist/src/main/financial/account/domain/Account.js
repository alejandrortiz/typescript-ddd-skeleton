"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const AccountId_1 = require("./AccountId");
const AccountName_1 = require("./AccountName");
const AggregateRoot_1 = require("../../../shared/domain/aggregate/AggregateRoot");
class Account extends AggregateRoot_1.AggregateRoot {
    constructor(id, name) {
        super();
        this.id = id;
        this.name = name;
    }
    static create(id, name) {
        return new Account(new AccountId_1.AccountId(id), new AccountName_1.AccountName(name));
    }
    static fromPrimitives(item) {
        return new Account(new AccountId_1.AccountId(item.id), new AccountName_1.AccountName(item.name));
    }
    toPrimitives() {
        return {
            id: this.id.value,
            name: this.name.value
        };
    }
}
exports.Account = Account;

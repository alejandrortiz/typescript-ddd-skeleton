"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreator = void 0;
const Account_1 = require("../../domain/Account");
class AccountCreator {
    constructor(repository) {
        this.repository = repository;
    }
    create(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = Account_1.Account.create(id, name);
            yield this.repository.save(account);
        });
    }
}
exports.AccountCreator = AccountCreator;

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
exports.MongoAccountRepository = void 0;
const MongoRepository_1 = require("../../../../shared/infrastructure/persistence/mongo/MongoRepository");
const Account_1 = require("../../domain/Account");
class MongoAccountRepository extends MongoRepository_1.MongoRepository {
    search(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield this.collection();
            const document = yield collection.findOne({ _id: id.value });
            return document ? Account_1.Account.fromPrimitives(Object.assign(Object.assign({}, document), { id: id.value })) : null;
        });
    }
    save(account) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.persist(account.id.value, account);
        });
    }
    moduleName() {
        return 'accounts';
    }
}
exports.MongoAccountRepository = MongoAccountRepository;

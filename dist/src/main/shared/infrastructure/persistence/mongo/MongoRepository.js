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
exports.MongoRepository = void 0;
class MongoRepository {
    constructor(_client) {
        this._client = _client;
    }
    client() {
        return this._client;
    }
    collection() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this._client).db().collection(this.moduleName());
        });
    }
    persist(id, aggregateRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield this.collection();
            const document = Object.assign(Object.assign({}, aggregateRoot.toPrimitives()), { _id: id, id: undefined });
            yield collection.updateOne({ _id: id }, { $set: document }, { upsert: true });
        });
    }
}
exports.MongoRepository = MongoRepository;

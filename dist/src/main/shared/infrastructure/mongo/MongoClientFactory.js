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
exports.MongoClientFactory = void 0;
const mongodb_1 = require("mongodb");
class MongoClientFactory {
    static createClient(contextName, config) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = MongoClientFactory.getClient(contextName);
            if (!client) {
                client = yield MongoClientFactory.createAndConnectClient(config);
                MongoClientFactory.registerClient(client, contextName);
            }
            return client;
        });
    }
    static getClient(contextName) {
        return MongoClientFactory.clients[contextName];
    }
    static createAndConnectClient(config) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new mongodb_1.MongoClient(config.url, { useUnifiedTopology: true, ignoreUndefined: true });
            yield client.connect();
            return client;
        });
    }
    static registerClient(client, contextName) {
        MongoClientFactory.clients[contextName] = client;
    }
}
exports.MongoClientFactory = MongoClientFactory;
MongoClientFactory.clients = {};

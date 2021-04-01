"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const MongoAccountRepository_1 = require("../../../../account/infrastructure/persistence/MongoAccountRepository");
exports.default = ({
    accountRepository: awilix_1.asClass(MongoAccountRepository_1.MongoAccountRepository).singleton()
});

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
exports.FindAccountQueryHandler = void 0;
const FindAccountQuery_1 = require("./FindAccountQuery");
const AccountResponseConverter_1 = require("../AccountResponseConverter");
class FindAccountQueryHandler {
    constructor(finder) {
        this.finder = finder;
    }
    subscribedTo() {
        return FindAccountQuery_1.FindAccountQuery;
    }
    handle(query) {
        return __awaiter(this, void 0, void 0, function* () {
            let account = yield this.finder.find(query.id);
            return AccountResponseConverter_1.AccountResponseConverter.toResponse(account);
        });
    }
}
exports.FindAccountQueryHandler = FindAccountQueryHandler;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountCommand = void 0;
class CreateAccountCommand {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
}
exports.CreateAccountCommand = CreateAccountCommand;

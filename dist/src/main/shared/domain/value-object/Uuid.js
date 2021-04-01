"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uuid = void 0;
const uuid_1 = require("uuid");
const uuid_validate_1 = __importDefault(require("uuid-validate"));
const InvalidArgumentError_1 = require("./InvalidArgumentError");
class Uuid {
    constructor(value) {
        this.ensureIsValidUuid(value);
        this.value = value;
    }
    static random() {
        return new Uuid(uuid_1.v4());
    }
    ensureIsValidUuid(id) {
        if (!uuid_validate_1.default(id)) {
            throw new InvalidArgumentError_1.InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
        }
    }
    toString() {
        return this.value;
    }
}
exports.Uuid = Uuid;

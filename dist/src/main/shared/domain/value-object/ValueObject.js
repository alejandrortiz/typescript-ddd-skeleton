"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
class ValueObject {
    constructor(_value) {
        this._value = _value;
    }
    value() {
        return this._value;
    }
    equals(o) {
        return this.value() === o.value();
    }
    toJSON() {
        return this.toString();
    }
    toString() {
        if (this._value) {
            return this._value.toString();
        }
        return this._value;
    }
    valueOf() {
        return this._value;
    }
}
exports.ValueObject = ValueObject;

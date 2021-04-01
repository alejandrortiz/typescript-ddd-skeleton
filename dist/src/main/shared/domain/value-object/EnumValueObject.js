"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumValueObject = void 0;
class EnumValueObject {
    constructor(value, validValues) {
        this.validValues = validValues;
        this.value = value;
        this.checkValueIsValid(value);
    }
    checkValueIsValid(value) {
        if (!this.validValues.includes(value)) {
            this.throwErrorForInvalidValue(value);
        }
    }
}
exports.EnumValueObject = EnumValueObject;

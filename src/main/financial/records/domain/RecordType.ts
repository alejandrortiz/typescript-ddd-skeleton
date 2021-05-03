import {EnumValueObject} from "../../../shared/domain/value-object/EnumValueObject";
import {InvalidArgumentError} from "../../../shared/domain/value-object/InvalidArgumentError";

export enum Type {
    EXPENSE = '0',
    INCOME = '1'
}

export class RecordType extends EnumValueObject<Type> {
    constructor(value: Type) {
        super(value, Object.values(Type));
    }

    static fromValue(value: string): RecordType {
        switch (value) {
            case Type.EXPENSE:
                return new RecordType(Type.EXPENSE);
            case Type.INCOME:
                return new RecordType(Type.INCOME);
            default:
                throw new InvalidArgumentError(`The type <${value}> is invalid`);
        }
    }

    protected throwErrorForInvalidValue(value: string): void {
        throw new InvalidArgumentError(`The type <${value}> is invalid`);
    }
}

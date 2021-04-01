export abstract class EnumValueObject<T> {
    readonly value: T;

    protected constructor(value: T, public readonly validValues: T[]) {
        this.value = value;
        this.checkValueIsValid(value);
    }

    private checkValueIsValid(value: T): void {
        if (!this.validValues.includes(value)) {
            this.throwErrorForInvalidValue(value);
        }
    }

    protected abstract throwErrorForInvalidValue(value: T): void;
}

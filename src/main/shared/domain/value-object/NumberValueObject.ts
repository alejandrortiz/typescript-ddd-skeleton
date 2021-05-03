export abstract class NumberValueObject {
    constructor(readonly value: number) {
    }

    public toString(): string {
        return this.value.toString();
    }
}

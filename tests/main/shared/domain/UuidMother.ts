import {MotherCreator} from "./MotherCreator";

export class UuidMother {
    static create(): string {
        return MotherCreator.create().datatype.uuid();
    }
}

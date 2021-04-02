import {MotherCreator} from "./MotherCreator";

export class WordMother {
    static create(): string {
        return MotherCreator.create().lorem.word();
    }
}

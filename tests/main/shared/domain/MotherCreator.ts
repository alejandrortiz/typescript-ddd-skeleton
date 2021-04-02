import * as faker from 'faker';

export class MotherCreator {
    static create(): Faker.FakerStatic {
        return faker;
    }
}

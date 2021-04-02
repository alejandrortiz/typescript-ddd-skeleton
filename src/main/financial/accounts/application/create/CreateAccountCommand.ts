import {Command} from "../../../../shared/domain/bus/command/Command";

export class CreateAccountCommand implements Command{
    private readonly _id: string;
    private readonly _name: string;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }
}

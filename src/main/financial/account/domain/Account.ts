import {AccountId} from "./AccountId";
import {AccountName} from "./AccountName";
import {AggregateRoot} from "../../../shared/domain/aggregate/AggregateRoot";

export class Account extends AggregateRoot {
    constructor(readonly id: AccountId, readonly name: AccountName) {
        super();
    }

    static create(id: string, name: string) {
        return new Account(
            new AccountId(id),
            new AccountName(name)
        );
    }

    static fromPrimitives(item: { id: string, name: string }): Account {
        return new Account(
            new AccountId(item.id),
            new AccountName(item.name)
        );
    }

    toPrimitives() {
        return {
            id: this.id.value,
            name: this.name.value
        }
    }
}

import {AccountId} from "../../../../../src/main/financial/accounts/domain/AccountId";
import {AccountName} from "../../../../../src/main/financial/accounts/domain/AccountName";
import {Account} from "../../../../../src/main/financial/accounts/domain/Account";
import {Nullable} from "../../../../../src/main/shared/domain/Null";
import {AccountIdMother} from "./AccountIdMother";
import {AccountNameMother} from "./AccountNameMother";
import {CreateAccountCommand} from "../../../../../src/main/financial/accounts/application/create/CreateAccountCommand";

export class AccountMother {
    static create({id = null, name = null}: { id?: Nullable<AccountId>, name?: Nullable<AccountName> } = {}): Account {
        return new Account(
            id ? id : AccountIdMother.create(),
            name ? name : AccountNameMother.create()
        );
    }

    static fromRequest(request: CreateAccountCommand): Account {
        return this.create({
            id: AccountIdMother.create({value: request.id}),
            name: AccountNameMother.create({value: request.name})
        });
    }
}

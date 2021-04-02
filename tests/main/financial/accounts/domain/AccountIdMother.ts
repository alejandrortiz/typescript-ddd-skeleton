import {Nullable} from "../../../../../src/main/shared/domain/Null";
import {AccountId} from "../../../../../src/main/financial/accounts/domain/AccountId";
import {UuidMother} from "../../../shared/domain/UuidMother";

export class AccountIdMother {
    public static create({value = null}: { value?: Nullable<string> } = {}): AccountId {
        return new AccountId(value ? value : UuidMother.create());
    }
}

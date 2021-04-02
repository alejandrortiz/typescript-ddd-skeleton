import {AccountName} from "../../../../../src/main/financial/accounts/domain/AccountName";
import {Nullable} from "../../../../../src/main/shared/domain/Null";
import {WordMother} from "../../../shared/domain/WordMother";

export class AccountNameMother {
    public static create({value = null}: { value?: Nullable<string> } = {}): AccountName {
        return new AccountName(value ? value : WordMother.create());
    }
}

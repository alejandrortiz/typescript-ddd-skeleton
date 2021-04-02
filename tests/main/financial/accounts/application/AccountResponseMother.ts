import {AccountResponse} from "../../../../../src/main/financial/accounts/application/AccountResponse";
import {Nullable} from "../../../../../src/main/shared/domain/Null";
import {UuidMother} from "../../../shared/domain/UuidMother";
import {WordMother} from "../../../shared/domain/WordMother";

export class AccountResponseMother {
    static create({id = null, name = null}: { id?: Nullable<string>, name?: Nullable<string> } = {}): AccountResponse {
        return new AccountResponse(
            id ? id : UuidMother.create(),
            name ? name : WordMother.create()
        )
    }
}

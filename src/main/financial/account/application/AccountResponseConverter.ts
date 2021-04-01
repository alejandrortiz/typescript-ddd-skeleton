import {AccountResponse} from "./AccountResponse";
import {Account} from "../domain/Account";
import {Response} from "../../../shared/domain/bus/query/Response";

export class AccountResponseConverter {
    static toResponse(account: Account): Response {
        return new AccountResponse(
            account.id.value,
            account.name.value
        );
    }
}

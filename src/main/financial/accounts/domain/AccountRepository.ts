import {Account} from "./Account";
import {Nullable} from "../../../shared/domain/Null";
import {AccountId} from "../../shared/domain/account/AccountId";

export interface AccountRepository {
    save(account: Account): Promise<void>;

    search(id: AccountId): Promise<Nullable<Account>>;
}

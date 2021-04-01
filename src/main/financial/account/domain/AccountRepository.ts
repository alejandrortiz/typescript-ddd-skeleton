import {Account} from "./Account";
import {AccountId} from "./AccountId";
import {Nullable} from "../../../shared/domain/Null";

export interface AccountRepository {
    save(account: Account): Promise<void>;

    search(id: AccountId): Promise<Nullable<Account>>;
}

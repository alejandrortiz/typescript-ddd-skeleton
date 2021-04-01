import {AccountRepository} from "../../domain/AccountRepository";
import {AccountId} from "../../domain/AccountId";
import {AccountNotFound} from "../../domain/AccountNotFound";
import {Account} from "../../domain/Account";

export class AccountFinder {
    constructor(private repository: AccountRepository) {
    }

    async find(id: string): Promise<Account> {
        const accountId = new AccountId(id);

        const account = await this.repository.search(accountId)

        if (null === account) {
            throw new AccountNotFound(accountId);
        }

        return account;
    }
}

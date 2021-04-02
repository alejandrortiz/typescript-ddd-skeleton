import {AccountRepository} from "../../domain/AccountRepository";
import {Account} from "../../domain/Account";

export class AccountCreator {
    constructor(private repository: AccountRepository) {
    }

    async create(id: string, name: string): Promise<void> {
        const account = Account.create(id, name);

        await this.repository.save(account);
    }
}

import {AccountRepository} from "../../../../../src/main/financial/accounts/domain/AccountRepository";
import {Nullable} from "../../../../../src/main/shared/domain/Null";
import {AccountId} from "../../../../../src/main/financial/accounts/domain/AccountId";
import {Account} from "../../../../../src/main/financial/accounts/domain/Account";

export class AccountRepositoryMock implements AccountRepository {
    private mockSave = jest.fn();
    private mockSearch = jest.fn();

    async save(account: Account): Promise<void> {
        this.mockSave(account);
    }

    assertLastAccountSaved(account: Account): void {
        const mock = this.mockSave.mock;
        const lastSavedAccount = mock.calls[mock.calls.length - 1][0] as Account;

        expect(lastSavedAccount).toBeInstanceOf(Account);
        expect(lastSavedAccount.toPrimitives()).toEqual(account.toPrimitives());
    }

    async search(id: AccountId): Promise<Nullable<Account>> {
        return this.mockSearch(id);
    }

    whenSearchThenReturn(value: Nullable<Account>): void {
        this.mockSearch.mockReturnValue(value);
    }

    assertLastSearchedAccountIs(id: AccountId): void {
        expect(this.mockSearch).toHaveBeenCalledWith(id);
    }
}

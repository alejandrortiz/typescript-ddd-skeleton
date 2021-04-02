import {AccountRepositoryMock} from "../../__mocks__/AccountRepositoryMock";
import {FindAccountQueryHandler} from "../../../../../../src/main/financial/accounts/application/find/FindAccountQueryHandler";
import {AccountFinder} from "../../../../../../src/main/financial/accounts/application/find/AccountFinder";
import {FindAccountQueryMother} from "./FindAccountQueryMother";
import {AccountIdMother} from "../../domain/AccountIdMother";
import {AccountMother} from "../../domain/AccountMother";
import {AccountResponseMother} from "../AccountResponseMother";

describe('AccountFinder', () => {
    let repository: AccountRepositoryMock;
    let handler: FindAccountQueryHandler;

    beforeEach(() => {
        repository = new AccountRepositoryMock();
        handler = new FindAccountQueryHandler(new AccountFinder(repository));
    });

    it('should find an existing account', async () => {
        const account = AccountMother.create();
        repository.whenSearchThenReturn(account);

        const query = FindAccountQueryMother.create();
        const response = await handler.handle(query);

        const accountId = AccountIdMother.create({value: query.id});
        repository.assertLastSearchedAccountIs(accountId);

        const expected = AccountResponseMother.create({id: response.id, name: response.name});
        expect(expected).toEqual(response);
    });

    it('should throw an exception when account not found', async () => {
        const query = FindAccountQueryMother.create();

        await expect(handler.handle(query)).rejects.toBeInstanceOf(TypeError);
    })
});

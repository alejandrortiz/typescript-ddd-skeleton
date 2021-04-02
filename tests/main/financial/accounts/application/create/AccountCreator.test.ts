import {AccountRepositoryMock} from "../../__mocks__/AccountRepositoryMock";
import {CreateAccountCommandHandler} from "../../../../../../src/main/financial/accounts/application/create/CreateAccountCommandHandler";
import {AccountCreator} from "../../../../../../src/main/financial/accounts/application/create/AccountCreator";
import {CreateAccountCommandMother} from "./CreateAccountCommandMother";
import {AccountMother} from "../../domain/AccountMother";

describe('AccountCreator', () => {
    let repository: AccountRepositoryMock;
    let handler: CreateAccountCommandHandler;

    beforeEach(() => {
        repository = new AccountRepositoryMock();
        handler = new CreateAccountCommandHandler(new AccountCreator(repository));
    });

    it('should create a valid account', async () => {
        const command = CreateAccountCommandMother.create();
        await handler.handle(command);

        const account = AccountMother.fromRequest(command);
        repository.assertLastAccountSaved(account);
    });
});

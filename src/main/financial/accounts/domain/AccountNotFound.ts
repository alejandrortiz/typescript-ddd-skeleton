import {DomainError} from "../../../shared/domain/DomainError";
import {AccountId} from "./AccountId";

export class AccountNotFound extends DomainError {
    constructor(private readonly id: AccountId) {
        super();

        this.message = this.errorMessage();
    }

    errorCode(): string {
        return 'account_not_found';
    }

    errorMessage(): string {
        return `The account <${this.id.value}> is not found`;
    }
}

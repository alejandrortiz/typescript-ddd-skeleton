import {DomainError} from "../../../shared/domain/DomainError";
import {AccountId} from "./AccountId";

export class AccountNotFound extends DomainError {
    private readonly _id: AccountId;

    constructor(id: AccountId) {
        super();

        this._id = id;
    }

    errorCode(): string {
        return 'account_not_found';
    }

    errorMessage(): string {
        return `The account <${this._id.value}> is not found`;
    }

}

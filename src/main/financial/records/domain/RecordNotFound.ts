import {DomainError} from "../../../shared/domain/DomainError";
import {RecordId} from "./RecordId";

export class RecordNotFound extends DomainError {
    constructor(private readonly id: RecordId) {
        super();
    }

    errorCode(): string {
        return "record_not_found";
    }

    errorMessage(): string {
        return `The record <${this.id.value}> is not found`;
    }

}

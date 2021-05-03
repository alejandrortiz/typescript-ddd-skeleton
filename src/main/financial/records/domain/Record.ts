import {AggregateRoot} from "../../../shared/domain/aggregate/AggregateRoot";
import {AccountId} from "../../shared/domain/account/AccountId";
import {RecordId} from "./RecordId";
import {RecordType} from "./RecordType";
import {RecordDate} from "./RecordDate";
import {RecordConcept} from "./RecordConcept";
import {RecordAmount} from "./RecordAmount";
import {RecordCurrency} from "./RecordCurrency";
import {RecordCategoryId} from "../../shared/domain/recordCategory/RecordCategoryId";

export class Record extends AggregateRoot {
    constructor(
        readonly id: RecordId,
        readonly type: RecordType,
        readonly date: RecordDate,
        readonly concept: RecordConcept,
        readonly amount: RecordAmount,
        readonly currency: RecordCurrency,
        readonly accountId: AccountId,
        readonly recordCategoryId: RecordCategoryId
    ) {
        super();
    }

    static create(
        id: string,
        type: string,
        date: string,
        concept: string,
        amount: number,
        currency: string,
        accountId: string,
        recordCategoryId: string
    ): Record {
        return new Record(
            new RecordId(id),
            RecordType.fromValue(type),
            new RecordDate(date),
            new RecordConcept(concept),
            new RecordAmount(amount),
            new RecordCurrency(currency),
            new AccountId(accountId),
            new RecordCategoryId(recordCategoryId)
        )
    }

    static fromPrimitives(item: {
        id: string,
        type: string,
        date: string,
        concept: string,
        amount: number,
        currency: string,
        accountId: string,
        recordCategoryId: string
    }): Record {
        return new Record(
            new RecordId(item.id),
            RecordType.fromValue(item.type),
            new RecordDate(item.date),
            new RecordConcept(item.concept),
            new RecordAmount(item.amount),
            new RecordCurrency(item.currency),
            new AccountId(item.accountId),
            new RecordCategoryId(item.recordCategoryId)
        );
    }

    toPrimitives(): any {
        return {
            id: this.id.value,
            type: this.type.value,
            date: this.date.value,
            concept: this.concept.value,
            amount: this.amount.value,
            currency: this.currency.value,
            accountId: this.accountId.value,
            recordCategoryId: this.recordCategoryId.value
        }
    }
}

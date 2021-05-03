import {Nullable} from "../../../../shared/domain/Null";
import {MongoRepository} from "../../../../shared/infrastructure/persistence/mongo/MongoRepository";
import {Account} from "../../domain/Account";
import {AccountRepository} from "../../domain/AccountRepository";
import {AccountId} from "../../../shared/domain/account/AccountId";

export class MongoAccountRepository extends MongoRepository<Account> implements AccountRepository {
    public async search(id: AccountId): Promise<Nullable<Account>> {
        const collection = await this.collection();
        const document = await collection.findOne({_id: id.value});

        return document ? Account.fromPrimitives({...document, id: id.value}) : null;
    }

    public async save(account: Account): Promise<void> {
        return this.persist(account.id.value, account);
    }

    protected moduleName(): string {
        return 'accounts';
    }

}

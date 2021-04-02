import {FindAccountQuery} from "../../../../../../src/main/financial/accounts/application/find/FindAccountQuery";
import {Nullable} from "../../../../../../src/main/shared/domain/Null";
import {UuidMother} from "../../../../shared/domain/UuidMother";

export class FindAccountQueryMother {
    static create({id = null}: { id?: Nullable<string> } = {}): FindAccountQuery {
        return new FindAccountQuery(
            id ? id : UuidMother.create()
        );
    }
}

import {CreateAccountCommand} from "../../../../../../src/main/financial/accounts/application/create/CreateAccountCommand";
import {Nullable} from "../../../../../../src/main/shared/domain/Null";
import {UuidMother} from "../../../../shared/domain/UuidMother";
import {WordMother} from "../../../../shared/domain/WordMother";

export class CreateAccountCommandMother {
    static create({id = null, name = null}: {id?: Nullable<string>, name?: Nullable<string>} = {}): CreateAccountCommand {
        return new CreateAccountCommand(
            id ? id : UuidMother.create(),
            name ? name : WordMother.create()
        );
    }
}

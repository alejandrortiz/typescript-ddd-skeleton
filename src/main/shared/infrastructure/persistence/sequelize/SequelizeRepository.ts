import {Model, Sequelize} from "sequelize";
import {ModelCtor} from "sequelize/types/lib/model";

export abstract class SequelizeRepository<M extends Model> {
    constructor(private _client: Sequelize) {
    }

    protected client(): Sequelize {
        return this._client;
    }

    protected abstract model(): ModelCtor<M>;
}

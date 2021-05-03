import {DataTypes, Model, Sequelize} from "sequelize";
import {ModelCtor} from "sequelize/types/lib/model";

interface RecordAttributes {
    id: string;
    type: string;
    concept: string;
    amount: number;
    currency: string;
    date: Date;

    accountId: string;
    recordCategoryId: string;

    createdAt: Date;
    updatedAt: Date;
}

export class RecordModel extends Model<RecordAttributes> {
    public id!: string;
    public type!: string;
    public concept!: string;
    public amount!: number;
    public currency!: string;
    public date!: Date;

    public accountId!: string;
    public recordCategoryId!: string;

    public createdAt!: Date;
    public updatedAt!: Date;
}

export function init(sequelize: Sequelize): ModelCtor<RecordModel> {
    const attributes: SequelizeAttributes<RecordAttributes> = {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            validate: {
                isUUID: 4,
                notEmpty: true,
                notNull: true
            }
        },
        type: {
            type: DataTypes.ENUM('0', '1'),
            allowNull: false,
            validate: {
                isIn: [['0', '1']],
                notEmpty: true,
                notNull: true
            }
        },
        concept: {
            type: DataTypes.STRING(120),
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: true
            }
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                isFloat: true,
                notEmpty: true,
                notNull: true
            }
        },
        currency: {
            type: DataTypes.STRING(3),
            allowNull: false,
            validate: {
                isAlpha: true,
                len: [3, 3],
                notEmpty: true,
                notNull: true
            }
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
                notEmpty: true,
                notNull: true
            }
        },
        accountId: {
            field: 'account_id',
            type: DataTypes.UUIDV4,
            allowNull: false,
            validate: {
                isUUID: 4,
                notEmpty: true,
                notNull: true
            }
        },
        recordCategoryId: {
            field: 'record_category_id',
            type: DataTypes.UUIDV4,
            allowNull: false,
            validate: {
                isUUID: 4,
                notEmpty: true,
                notNull: true
            }
        },
        createdAt: {field: 'created_at', type: DataTypes.DATE, allowNull: false},
        updatedAt: {field: 'updated_at', type: DataTypes.DATE}
    };

    return sequelize.define<RecordModel, RecordAttributes>('Record', attributes, {tableName: 'records'});
}

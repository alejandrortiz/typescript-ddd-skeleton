import {Dialect} from "sequelize";

export type SequelizeConfig = {
    driver: Dialect,
    user: string,
    password: string,
    host: string,
    port: number
    database: string
};

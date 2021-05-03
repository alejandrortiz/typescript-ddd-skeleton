import {SequelizeConfig} from "./SequelizeConfig";
import config from "../di/config";
import {Dialect} from "sequelize";

export class SequelizeConfigFactory {
    public static createConfig(): SequelizeConfig {
        return {
            driver: config.get('database.driver') as Dialect,
            user: config.get('database.user'),
            password: config.get('database.password'),
            host: config.get('database.host'),
            port: config.get('database.port'),
            database: config.get('database.name')
        }
    }
}

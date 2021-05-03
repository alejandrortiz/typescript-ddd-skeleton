import {Sequelize} from "sequelize";
import {SequelizeConfig} from "./SequelizeConfig";

export class SequelizeClientFactory {
    private static client: Sequelize;

    static createClient(config: SequelizeConfig): Sequelize {
        let client = SequelizeClientFactory.client;

        if (!client) {
            client = SequelizeClientFactory.createAndConnectClient(config);

            SequelizeClientFactory.client = client;
        }

        return client;
    }

    private static createAndConnectClient(config: SequelizeConfig): Sequelize {
        return new Sequelize(
            config.database,
            config.user,
            config.password,
            {
                host: config.host,
                port: config.port,
                dialect: config.driver,
                logging: (msg) => console.log(msg)
            }
        );
    }
}

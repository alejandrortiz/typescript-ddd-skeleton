import {MongoConfig} from "../../../../shared/infrastructure/mongo/MongoConfig";

export class MongoConfigFactory {
    static createConfig(): MongoConfig {
        return {
            url: config.get('mongo.url')
        }
    }
}

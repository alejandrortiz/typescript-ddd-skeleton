import {MongoConfig} from "./MongoConfig";
import config from "../di/config";

export class MongoConfigFactory {
    public static createConfig(): MongoConfig {
        return {
            url: config.get('mongo.url')
        }
    }
}

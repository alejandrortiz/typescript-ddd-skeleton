import {MongoClient} from "mongodb";
import {MongoConfig} from "./MongoConfig";

export class MongoClientFactory {
    private static client: MongoClient;

    static async createClient(config: MongoConfig): Promise<MongoClient> {
        let client = MongoClientFactory.client;

        if (!client) {
            client = await MongoClientFactory.createAndConnectClient(config);

            MongoClientFactory.client = client;
        }

        return client;
    }

    private static async createAndConnectClient(config: MongoConfig): Promise<MongoClient> {
        const client = new MongoClient(config.url, {useUnifiedTopology: true, ignoreUndefined: true});

        await client.connect();

        return client;
    }
}

import {ContainerBuilder, YamlFileLoader} from "node-dependency-injection";

export class Container {
    private static inst: Container | null;
    container: ContainerBuilder;

    constructor() {
        this.container = new ContainerBuilder();
        const loader = new YamlFileLoader(this.container);
        const env = process.env.ENV || 'dev';

        loader.load(`${__dirname}/services_${env}.yaml`);
    }

    public static instance(): Container {
        if (null === this.inst) {
            this.inst = new Container();
        }

        return this.inst;
    }

    public get(key: string) {
        return this.container.get(key);
    }

    public set(key: string, value: any) {
        this.container.set(key, value);
    }

    public remove(key: string) {
        this.container.remove(key);
    }
}

import {ContainerBuilder} from "node-dependency-injection";

export class Container {
    static instance: Container;

    constructor(private builder: ContainerBuilder) {
        Container.instance = this;
    }

    public get(key: string) {
        return this.builder.get(key);
    }
}

import {ContainerBuilder} from "node-dependency-injection";

export class DiContainer {
    static instance: DiContainer;

    constructor(private builder: ContainerBuilder) {
        DiContainer.instance = this;
    }

    public get(key: string) {
        return this.builder.get(key);
    }
}

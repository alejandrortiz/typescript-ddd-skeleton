import {Router} from "express";
import {Kernel} from "../main/shared/infrastructure/express/Kernel";
import {ContainerBuilder, YamlFileLoader} from "node-dependency-injection";
import {glob} from "glob";

export class ApplicationKernel extends Kernel {
    configureRoutes(router: Router): void {
        const routes = glob.sync(`${__dirname}/**/*.route.*`);

        routes.forEach((route: string) => require(route).register(router));
    }

    configureContainer(): void {
        const container = new ContainerBuilder();
        const loader = new YamlFileLoader(container);

        loader.load(`${__dirname}/config/services.yaml`);
        loader.load(`${__dirname}/config/services_${this.environment}.yaml`);
    }
}

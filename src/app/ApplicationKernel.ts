import {Router} from "express";
import {Kernel} from "../main/shared/infrastructure/express/Kernel";
import {glob} from "glob";
import {ContainerBuilder, YamlFileLoader} from "node-dependency-injection";
import {Container} from "../main/shared/infrastructure/di/Container";

export class ApplicationKernel extends Kernel {
    configureRoutes(router: Router): void {
        const routes = glob.sync(`${__dirname}/routes/**/*.route.*`);

        routes.forEach((route: string) => require(route).register(router));
    }

    configureContainer(): Container {
        const builder = new ContainerBuilder();
        const loader = new YamlFileLoader(builder);
        // const env = process.env.ENV || 'dev';

        loader.load(`${__dirname}/config/services.yaml`);

        return new Container(builder);
    }
}

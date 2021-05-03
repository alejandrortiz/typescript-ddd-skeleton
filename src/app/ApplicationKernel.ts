import {Router} from "express";
import {Kernel} from "../main/shared/infrastructure/express/Kernel";
import {glob} from "glob";
import {ContainerBuilder, YamlFileLoader} from "node-dependency-injection";
import {DiContainer} from "../main/shared/infrastructure/di/DiContainer";
import * as fs from "fs";

export class ApplicationKernel extends Kernel {
    configureRoutes(router: Router): void {
        const routes = glob.sync(`${__dirname}/routes/**/*.route.*`);

        routes.forEach((route: string) => require(route).register(router));
    }

    configureContainer(): DiContainer {
        const builder = new ContainerBuilder();
        const loader = new YamlFileLoader(builder);
        const env = process.env.ENV || 'dev';

        loader.load(`${__dirname}/config/services.yaml`);

        const env_services_path = `${__dirname}/config/services_${env}.yaml`;

        if (fs.existsSync(env_services_path)) {
            loader.load(env_services_path);
        }

        return new DiContainer(builder);
    }
}

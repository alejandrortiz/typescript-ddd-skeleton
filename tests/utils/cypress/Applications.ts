import {ApplicationKernel} from "../../../src/app/ApplicationKernel";

export class Applications {
    private static application: ApplicationKernel;

    static async start() {
        this.application = new ApplicationKernel('test', '3000');

        await this.application.start();

        return this.application.port();
    }

    static async stop() {
        await this.application.stop();
    }
}

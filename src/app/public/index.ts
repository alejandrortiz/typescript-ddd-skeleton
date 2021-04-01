import {ApplicationKernel} from "../ApplicationKernel";

try {
    const environment = process.env.ENV || 'dev';
    const port = process.env.PORT || '3000';

    const application = new ApplicationKernel(environment, port);

    application.start().catch(handleError);
} catch (e) {
    handleError(e);
}

function handleError(e: any) {
    console.log(e);
    process.exit(1);
}

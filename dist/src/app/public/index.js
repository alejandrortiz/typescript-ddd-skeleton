"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationKernel_1 = require("../ApplicationKernel");
try {
    const environment = process.env.ENV || 'dev';
    const port = process.env.PORT || '3000';
    const application = new ApplicationKernel_1.ApplicationKernel(environment, port);
    application.start().catch(handleError);
}
catch (e) {
    handleError(e);
}
function handleError(e) {
    console.log(e);
    process.exit(1);
}

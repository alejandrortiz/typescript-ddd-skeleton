import * as httpStatus from "http-status";
import {Request, Response} from "express";
import {GET, route} from "awilix-express";
import {ApiController} from "../../../main/shared/infrastructure/express/ApiController";

@route('/api/health-check')
export class HealthCheckGetController implements ApiController {

    @GET()
    async handle(request: Request, response: Response) {
        response.status(httpStatus.NO_CONTENT).send();
    }
}

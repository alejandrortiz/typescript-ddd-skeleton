import * as httpStatus from "http-status";
import {Request, Response} from "express";
import {ApiController} from "../../../main/shared/infrastructure/express/ApiController";

export class HealthCheckGetController implements ApiController {

    async handle(request: Request, response: Response) {
        response.status(httpStatus.NO_CONTENT).send();
    }
}

import * as httpStatus from "http-status";
import {Request, Response} from "express";
import {ApiController} from "../../../../main/shared/infrastructure/express/ApiController";
import {RecordResponse} from "../../../../main/financial/records/application/RecordResponse";
import {FindRecordQuery} from "../../../../main/financial/records/application/find/FindRecordQueryHandler";

export class RecordGetController extends ApiController {
    async handle(request: Request, response: Response) {
        const id = request.params.id;

        try {
            const record = await this.ask<RecordResponse>(
                new FindRecordQuery(id)
            );

            response.status(httpStatus.OK).send(record);
        } catch (error) {
            this.responseError(response, error);
        }
    }
}

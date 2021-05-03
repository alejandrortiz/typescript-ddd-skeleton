import {Request, Response} from "express";
import * as httpStatus from "http-status";
import {ApiController} from "../../../../main/shared/infrastructure/express/ApiController";
import {CreateRecordCommand} from "../../../../main/financial/records/application/create/CreateRecordCommand";

export class RecordPutController extends ApiController {
    async handle(request: Request, response: Response) {
        const id: string = request.params.id;
        const type: string = request.body.type;
        const date: string = request.body.date;
        const concept: string = request.body.concept;
        const amount: number = request.body.amount;
        const currency: string = request.body.currency;
        const accountId: string = request.body.accountId;
        const recordCategoryId: string = request.body.recordCategoryId;

        try {
            await this.dispatch(new CreateRecordCommand(
                id, type, date, concept, amount, currency, accountId, recordCategoryId
            ));

            response.status(httpStatus.CREATED).send();
        } catch (error) {
            this.responseError(response, error);
        }
    }
}

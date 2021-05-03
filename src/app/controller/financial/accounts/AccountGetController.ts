import * as httpStatus from "http-status";
import {Request, Response} from "express";
import {ApiController} from "../../../../main/shared/infrastructure/express/ApiController";
import {FindAccountQuery} from "../../../../main/financial/accounts/application/find/FindAccountQuery";
import {AccountResponse} from "../../../../main/financial/accounts/application/AccountResponse";

export class AccountGetController extends ApiController {
    async handle(request: Request, response: Response) {
        const id = request.params.id;

        try {
            const account = await this.ask<AccountResponse>(
                new FindAccountQuery(id)
            );

            response.status(httpStatus.OK).send(account);
        } catch (error) {
            this.responseError(response, error);
        }
    }
}

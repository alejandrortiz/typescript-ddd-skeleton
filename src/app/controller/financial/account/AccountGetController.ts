import * as httpStatus from "http-status";
import {Request, Response} from "express";
import {ApiController} from "../../../../main/shared/infrastructure/express/ApiController";
import {QueryBus} from "../../../../main/shared/domain/bus/query/QueryBus";
import {FindAccountQuery} from "../../../../main/financial/accounts/application/find/FindAccountQuery";
import {AccountResponse} from "../../../../main/financial/accounts/application/AccountResponse";
import {DomainError} from "../../../../main/shared/domain/DomainError";

export class AccountGetController implements ApiController {
    constructor(private queryBus: QueryBus) {
    }

    async handle(request: Request, response: Response) {
        const id = request.params.id;

        try {
            const account = await this.queryBus.ask<AccountResponse>(
                new FindAccountQuery(id)
            );

            response.status(httpStatus.OK).send(account);
        } catch (error) {
            if (error instanceof DomainError) {
                response.status(httpStatus.NOT_FOUND).json({
                    error: {
                        code: error.errorCode(),
                        message: error.errorMessage()
                    }
                });
            } else {
                response.status(httpStatus.INTERNAL_SERVER_ERROR).send();
            }
        }
    }
}

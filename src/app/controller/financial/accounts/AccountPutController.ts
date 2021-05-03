import {Request, Response} from "express";
import * as httpStatus from "http-status";
import {ApiController} from "../../../../main/shared/infrastructure/express/ApiController";
import {CreateAccountCommand} from "../../../../main/financial/accounts/application/create/CreateAccountCommand";

export class AccountPutController extends ApiController {
    async handle(request: Request, response: Response) {
        const id: string = request.params.id;
        const name: string = request.body.name;

        try {
            await this.dispatch(new CreateAccountCommand(id, name));

            response.status(httpStatus.CREATED).send();
        } catch (error) {
            this.responseError(response, error);
        }
    }
}

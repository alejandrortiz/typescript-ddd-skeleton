import {Request, Response} from "express";
import * as httpStatus from "http-status";
import {ApiController} from "../../../main/shared/infrastructure/express/ApiController";
import {CommandBus} from "../../../main/shared/domain/bus/command/CommandBus";
import {CreateAccountCommand} from "../../../main/financial/accounts/application/create/CreateAccountCommand";
import {DomainError} from "../../../main/shared/domain/DomainError";

export class AccountPutController implements ApiController {
    constructor(private commandBus: CommandBus) {
    }

    async handle(request: Request, response: Response) {
        const id: string = request.params.id;
        const name: string = request.body.name;

        try {
            await this.commandBus.dispatch(new CreateAccountCommand(id, name));
        } catch (error) {
            if (error instanceof DomainError) {
                response.status(httpStatus.BAD_REQUEST).json({
                    error: {
                        code: error.errorCode(),
                        message: error.errorMessage()
                    }
                });
            } else {
                response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
            }
        }

        response.status(httpStatus.CREATED).send();
    }
}

import {Request, Response} from "express";
import {Logger} from "../../domain/Logger";
import {QueryBus} from "../../domain/bus/query/QueryBus";
import {CommandBus} from "../../domain/bus/command/CommandBus";
import {Command} from "../../domain/bus/command/Command";
import {Query} from "../../domain/bus/query/Query";
import {Response as QueryResponse} from "../../../shared/domain/bus/query/Response";
import {DomainError} from "../../domain/DomainError";
import httpStatus from "http-status";

export abstract class ApiController {
    constructor(
        private readonly logger: Logger,
        private readonly queryBus: QueryBus,
        private commandBus: CommandBus
    ) {
    }

    public abstract handle(request: Request, response: Response): Promise<void>;

    protected async dispatch(command: Command): Promise<void> {
        await this.commandBus.dispatch(command);
    }

    protected async ask<R extends QueryResponse>(query: Query): Promise<R> {
        return this.queryBus.ask<R>(query);
    }

    protected responseError(response: Response, error: Error): void {
        if (error instanceof DomainError) {
            response.status(httpStatus.BAD_REQUEST).json({
                error: {
                    code: error.errorCode(),
                    message: error.errorMessage()
                }
            });
        } else {
            response.status(httpStatus.INTERNAL_SERVER_ERROR).json({error: {message: error.message}});
        }
    }

    protected error(message: string): void {
        this.logger.error(message);
    }
}

import {Request, Response} from "express";

export interface ApiController {
    handle(request: Request, response: Response): Promise<void>;
}

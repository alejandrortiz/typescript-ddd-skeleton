import {Request, Response, Router} from "express";
import {DiContainer} from "../../../main/shared/infrastructure/di/DiContainer";

export const register = (router: Router) => {
    router.get('/api/financial/accounts/:id', ((req: Request, res: Response) => {
        const controller = DiContainer.instance.get('App.controller.AccountGetController');

        return controller.handle(req, res);
    }));

    router.put('/api/financial/accounts/:id', ((req: Request, res: Response) => {
        const controller = DiContainer.instance.get('App.controller.AccountPutController');

        return controller.handle(req, res);
    }));
}

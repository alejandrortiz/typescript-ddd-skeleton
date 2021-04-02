import {Request, Response, Router} from "express";
import {Container} from "../../main/shared/infrastructure/di/Container";

export const register = (router: Router) => {
    router.get('/api/accounts/:id', ((req: Request, res: Response) => {
        const controller = Container.instance.get('App.controller.AccountGetController');

        return controller.handle(req, res);
    }));

    router.put('/api/accounts/:id', ((req: Request, res: Response) => {
        const controller = Container.instance.get('App.controller.AccountPutController');

        return controller.handle(req, res);
    }));
}

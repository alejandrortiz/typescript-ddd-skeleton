import {Request, Response, Router} from "express";
import {Container} from "../../main/shared/infrastructure/di/Container";

export const register = (router: Router) => {
    router.put('/api/accounts/:id', ((req: Request, res: Response) => {
        const controller = Container.instance().get('algo');

        return controller.handle(req, res);
    }))
}

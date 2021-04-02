import {Request, Response, Router} from "express";
import {Container} from "../../main/shared/infrastructure/di/Container";

export const register = (router: Router) => {
    router.get('/api/health-check', ((req: Request, res: Response) => {
        const controller = Container.instance.get('App.controller.HealthCheckGetController');

        return controller.handle(req, res);
    }))
}

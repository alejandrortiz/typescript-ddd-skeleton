import {Request, Response, Router} from "express";
import {DiContainer} from "../../main/shared/infrastructure/di/DiContainer";

export const register = (router: Router) => {
    router.get('/api/health-check', ((req: Request, res: Response) => {
        const controller = DiContainer.instance.get('App.controller.HealthCheckGetController');

        return controller.handle(req, res);
    }))
}

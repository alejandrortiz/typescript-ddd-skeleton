import {Request, Response, Router} from "express";
import {DiContainer} from "../../../main/shared/infrastructure/di/DiContainer";

export const register = (router: Router) => {
    router.get('/api/financial/records/:id', ((req: Request, res: Response) => {
        const controller = DiContainer.instance.get('App.controller.RecordGetController');

        return controller.handle(req, res);
    }));

    router.put('/api/financial/records/:id', ((req: Request, res: Response) => {
        const controller = DiContainer.instance.get('App.controller.RecordPutController');

        return controller.handle(req, res);
    }));
}

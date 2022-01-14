import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from 'http-status-codes';

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{username: "Guilherme Vieira"}];
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', (req: Request, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({uuid});
});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    res.status(StatusCodes.CREATED).send({body});
});

usersRoute.put('/users/:uuid', (req: Request, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const user = req.body;

    user.uuid = uuid;

    res.status(StatusCodes.OK).send({user});
});

usersRoute.delete('/users/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.OK);
})

export default usersRoute;
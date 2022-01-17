import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from 'http-status-codes';
import userRepository from "../repositories/user.repository";

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.findAllUsers();
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const uuid = req.params.uuid;
        const user = await userRepository.findById(uuid);
        res.status(StatusCodes.OK).send({user});
        
    } catch (error) {
        next(error);
    }
});

usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    const uuid = await userRepository.create(body);
    res.status(StatusCodes.CREATED).send({uuid});
});

usersRoute.put('/users/:uuid', async (req: Request, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const user = req.body;

    user.uuid = uuid;
    await userRepository.update(user);

    res.status(StatusCodes.OK).send();
});

usersRoute.delete('/users/:uuid', async (req: Request, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    await userRepository.remove(uuid);
    res.status(StatusCodes.OK).send();
})

export default usersRoute;
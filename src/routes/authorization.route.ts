import { Router, Request, Response, NextFunction } from 'express';
import ForbiddenError from '../models/error/forbidden.error';
import userRepository from '../repositories/user.repository';
import JWT from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import basicAuthenticationMiddleware from '../middleware/basic.auth.middleware';
import jwtAuthenticationMiddleware from '../middleware/jwt.auth.middleware';

const authorizationRoute = Router();

authorizationRoute.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user;
        const jwtPayload = { username: user?.username };
        const jwtOptions = { subject: user?.uuid };
        const mySecretKey = 'my_secret_key';

        const jwt = JWT.sign(jwtPayload, mySecretKey, jwtOptions);
        res.status(StatusCodes.OK).json({ token: jwt });

    } catch (error) {
        next(error);
    }
});

authorizationRoute.post('/token/validate', jwtAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    res.send(StatusCodes.OK);
});

export default authorizationRoute;
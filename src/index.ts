import express from 'express';
import errorHandler from './middleware/error.handler';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(usersRoute, statusRoute);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server on in the port 3000');
});
import {Router} from 'express';

const routes = Router();

routes.get('/user', (request, response) => response.json({
    message: 'Hello world'
}))

export default routes;
import { Hono } from "hono";

const authRouter = new Hono();

authRouter.post('/signup');
authRouter.get('/login');
authRouter.post('/forgot-password');
authRouter.post('/reset-password');


export default authRouter;
import { Context } from "hono";

class AuthController {
    signup = async(c:Context) => {
        try {
            const reqBody = await c.req.json();

            // const 


        } catch (error){
            throw error;
        }
    }
}

export default AuthController;
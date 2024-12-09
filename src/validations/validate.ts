import { flatten, safeParseAsync } from "valibot";
import UnProcessableEntityException from "../exceptions/unProcessableEntityException";

export const validate = async (schema: any, data: any) => {
    try {
        const res = await safeParseAsync(schema, data, { abortEarly: true});
        if (!res.success){
            const errData = flatten(res.issues).nested
            throw new UnProcessableEntityException('Validation Failed',errData);
        }
    } catch (error) {
        throw error;   
    }
}
import { InferOutput, object } from "valibot";
import { VEmailSchema, VPasswordSchema } from "./vUserSchema";

export const VLoginSchema = object({
    email: VEmailSchema,
    password: VPasswordSchema
})

export type TVLoginSchema = InferOutput<typeof VLoginSchema>
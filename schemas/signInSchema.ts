import { PassThrough } from "stream";
import * as z from "zod";


export const signInSchema = z.object({
    identifier: z.string().min(1, {message: "Enail or required"}).email({message: "Please enter valid email"}),
    password: z.string().min(1, {message:"Password is required"}).min(8, {message: "Password must be of 8 Character"})
});
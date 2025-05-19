import * as z from 'zod';

export const signUpSchema = z.object({
  email: z.string().min(6, {message:"Email of min length 6 is required"}).email({message:"Please enter a valid email"}),
  password: z.string().min(8, {message: "Password is required of min 8 Character"}).max(32, {message:"Cannot be more than 32 character"}),
  passwordConfirmation: z.string().min(1, {message: "Please confirm your password"})
}).refine((data)=> data.password === data.passwordConfirmation,{
    message: "Password do not match",
    path: ["passwordConfirmation"]
})
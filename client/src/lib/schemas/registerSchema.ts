import {email, z} from "zod";

const passwordValidation = new RegExp(
    /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/
)

export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().regex(passwordValidation,{
        message:'password should be contatin 1 alpha, 1number,1 upper case, 1 special and be 6-10 character'
   })

});
export type RegisterSchema = z.infer<typeof registerSchema>;
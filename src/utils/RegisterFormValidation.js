import * as Yup from 'yup';

export const signupSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).max(14).required()
})
import * as Yup from 'yup';

export const signupSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Required'),
    password: Yup.string().min(6, 'Password must be minimum 6 characters').max(14, 'Password must be maximum 14 characters').required('Required')
})


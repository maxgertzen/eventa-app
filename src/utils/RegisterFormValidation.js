import * as Yup from 'yup';
import { checkEmailAvailability } from '../api/index';

export const signupSchemaStepOne = Yup.object({
    email: Yup.string().email('Invalid Email').required('Required').test(
        'is-available',
        'Email is taken',
        async (value, context) => (await checkEmailAvailability(value)),
    ),
    password: Yup.string().min(6, 'Password must be minimum 6 characters').max(14, 'Password must be maximum 14 characters').required('Required'),
    passwordConfirmation: Yup.string().required('Required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

export const signupSchemaStepTwo = Yup.object({
    firstName: Yup.string(),
    lastName: Yup.string(),
    address: Yup.string().max(30)
})

export const signupSchemaStepThree = Yup.object({
    bio: Yup.string().max(250, "Maximum 250 Characters"),
    birth_date: Yup.date().max(new Date(), 'You can\'t be born in the future... yet!')
})


import * as Yup from 'yup';

export const userSchema = Yup.object({
    first_name: Yup.string(),
    last_name: Yup.string(),
    address: Yup.string().max(30, "Maximum 30 Characters"),
    bio: Yup.string().max(250, "Maximum 250 Characters"),
    birth_date: Yup.date().max(new Date(), 'You can\'t be born in the future... yet!')
})

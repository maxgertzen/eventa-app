import * as Yup from 'yup';

export const eventSchema = Yup.object({
    name: Yup.string().max(100).required(),
    description: Yup.string().max(200),
    category: Yup.number().required(),
    price: Yup.number().min(0),
    dateStart: Yup.date().min(new Date()),
    dateEnd: Yup.date().min(new Date())
})
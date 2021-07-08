import * as Yup from 'yup';

export const eventSchema = Yup.object({
    name: Yup.string().max(100).required(),
    description: Yup.string().max(200),
    price: Yup.number().min(0),
    dateStart: Yup.date().min(new Date()),
    dateEnd: Yup.date().min(new Date()),
    timeStart: Yup.date().min(new Date()),
    timeEnd: Yup.date().min(new Date())
})
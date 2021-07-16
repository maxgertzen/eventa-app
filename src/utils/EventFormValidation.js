import * as Yup from 'yup';

export const eventSchema = Yup.object({
    name: Yup.string().max(100).required('Event Name is Required. You can always change it later'),
    description: Yup.string(),
    category: Yup.number().required(),
    price: Yup.number().min(0),
    dateStart: Yup.date().min(new Date()),
    dateEnd: Yup.date().min(new Date())
})
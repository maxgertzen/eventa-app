import * as Yup from 'yup';

export const eventSchema = Yup.object({
    name: Yup.string().max(65, "Maximum 65 characters!").required('Event Name is Required. You can always change it later'),
    category: Yup.number().required(),
    price: Yup.number().min(0),
    description: Yup.string(),
    dateStart: Yup.date().min(new Date()),
    dateEnd: Yup.date().min(new Date())

})

export const eventFormStepOneSchema = Yup.object({
    name: Yup.string().max(65, "Maximum 65 characters!").required('Event Name is Required. You can always change it later'),
})

export const eventFormStepTwoSchema = Yup.object({
    description: Yup.string(),
    dateStart: Yup.date().min(new Date()),
    dateEnd: Yup.date().min(new Date())
})


export const eventFormStepThreeSchema = Yup.object({
    address: Yup.string()
})
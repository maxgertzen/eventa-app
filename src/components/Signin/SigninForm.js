import React from 'react';
import { useFormik } from 'formik';
import { signupSchema } from '../../utils/RegisterFormValidation';
import { addLogUser } from '../../api';

const SigninForm = ({ formAction, notifySubmit }) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        vaidationSchema: signupSchema,
        onSubmit: values => {
            addLogUser(values, formAction)
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
            <button type="submit">Submit</button>
        </form>
    )
}

export default SigninForm;
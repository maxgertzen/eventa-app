import React from 'react';
import { Formik } from 'formik';
import { signupSchema } from '../../utils/RegisterFormValidation';
import { addLogUser } from '../../api';

const SigninForm = ({ formAction, authorize }) => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={signupSchema}
            onSubmit={async (values, { setSubmitting }) => {
                await addLogUser(values, formAction);
                authorize()
                setSubmitting(false);
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" {...formik.getFieldProps('password')} />
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                    <button type="submit" disabled={!formik.isValid}>{formAction}</button>
                </form>
            )}
        </Formik>
    );
}

export default SigninForm;
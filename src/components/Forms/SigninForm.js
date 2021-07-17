import React from 'react';
import { Formik } from 'formik';
import { addLogUser } from '../../api';
import { loginSchema } from '../../utils/LoginFormValidation';
const SigninForm = ({ formAction, authorize, children }) => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={async (values, { setSubmitting }) => {
                await addLogUser(values, formAction);
                authorize()
                setSubmitting(false);
            }}
        >
            {formik => (
                <form className="m-auto row text-left" style={{ width: '20vw' }} onSubmit={formik.handleSubmit}>
                    <div className="col-12 mb-2">
                        <label className="form-label" htmlFor="email">Email Address</label>
                        <input className="form-control" id="email" type="email" {...formik.getFieldProps('email')} />
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="col-12 mb-2">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input className="form-control" id="password" type="password" {...formik.getFieldProps('password')} />
                        {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="col-12 mb-2 d-grid">
                        <button type="submit" className="btn btn-primary text-capitalize" disabled={!formik.isValid}>{formAction}</button>
                    </div>
                    {children}
                </form>
            )}
        </Formik>
    );
}

export default SigninForm;
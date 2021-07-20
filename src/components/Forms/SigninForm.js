import React from 'react';
import { Formik } from 'formik';
import { loginSchema } from '../../utils/LoginFormValidation';


const SigninForm = ({ submitToServer, children }) => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={async (values, { setSubmitting }) => {
                await submitToServer(values);
                setSubmitting(false);
            }}
        >
            {formik => (
                <form className="row m-auto text-left text-white my-5" style={{ width: '20vw' }} onSubmit={formik.handleSubmit}>
                    <div className="col-12 mb-3">
                        <label className="form-label" htmlFor="email">Email Address</label>
                        <input className="form-control" id="email" type="email" {...formik.getFieldProps('email')} />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-danger">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="col-12 mb-3">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input className="form-control" id="password" type="password" {...formik.getFieldProps('password')} />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-danger">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="col-12 my-3 d-grid">
                        <button type="submit" className="btn btn-radius btn-success bg-gradient text-capitalize" disabled={!formik.isValid}>Login</button>
                    </div>
                    {children}
                </form>
            )}
        </Formik>
    );
}

export default SigninForm;
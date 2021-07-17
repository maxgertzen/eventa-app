import React from 'react';
import { signupSchemaStepOne } from '../../../utils/RegisterFormValidation';
import { Formik } from 'formik';

const StepOne = ({ data, next, children }) => {
    const handleSubmit = (values, { setSubmitting }) => {
        next(values)
        setSubmitting(false)
    }
    return (
        <Formik
            initialValues={data}
            validationSchema={signupSchemaStepOne}
            onSubmit={handleSubmit}
        >
            {formik => (
                <form className="m-auto row text-left" style={{ width: '20vw' }} onSubmit={formik.handleSubmit} autoComplete="off">
                    <div className="col-md-12 col-12 mb-2">
                        <label className="form-label" htmlFor="email">Email Address</label>
                        <input className={`form-control ${formik.touched.email && !formik.errors.email ? 'is-valid' : formik.errors.email && formik.touched.email ? 'is-invalid' : ''}`} id="email" type="email" {...formik.getFieldProps('email')} placeholder="Email goes here" />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="invalid-feedback">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="col-md-12 col-12 mb-2">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input className={`form-control ${formik.touched.password && !formik.errors.password ? 'is-valid' : formik.errors.password && formik.touched.password ? 'is-invalid' : ''}`} id="password" type="password" autoComplete="new-password" {...formik.getFieldProps('password')} placeholder="Enter Password" />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="invalid-feedback">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="col-md-12 col-12 mb-2">
                        <label className="form-label" htmlFor="passwordConfirmation">Confirm Password</label>
                        <input className={`form-control ${formik.touched.passwordConfirmation && !formik.errors.passwordConfirmation ? 'is-valid' : formik.errors.passwordConfirmation && formik.touched.passwordConfirmation ? 'is-invalid' : ''}`} id="passwordConfirmation" type="password" autoComplete="new-password" {...formik.getFieldProps('passwordConfirmation')} placeholder="Repeat Password" />
                        {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                            <div className="invalid-feedback">{formik.errors.passwordConfirmation}</div>
                        ) : null}
                    </div>
                    <div className="col-md-12 col-12 mb-2 d-grid">
                        <button type="submit" className="btn btn-primary text-capitalize" disabled={!formik.isValid}>Next Step</button>
                    </div>
                    {children}
                </form>
            )}
        </Formik>
    );
}

export default StepOne
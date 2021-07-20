import React from 'react';
import { signupSchemaStepTwo } from '../../../utils/RegisterFormValidation';
import { Formik } from 'formik';
import LocationSelect from './LocationSelect';

const StepTwo = ({ data, next, prev }) => {
    const handleSubmit = (values) => {
        next(values, true)
    }
    return (
        <Formik
            initialValues={data}
            validationSchema={signupSchemaStepTwo}
            onSubmit={handleSubmit}
        >
            {formik => (
                <form className="m-auto row text-left text-white" onSubmit={formik.handleSubmit}>
                    <div className="col-12 mb-2">
                        <label className="form-label" htmlFor="firstName">First Name</label>
                        <input className="form-control" id="firstName" type="text" {...formik.getFieldProps('firstName')} placeholder="(Optional) John" />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className="invalid-feedback">{formik.errors.firstName}</div>
                        ) : null}
                    </div>
                    <div className="col-12 mb-2">
                        <label className="form-label" htmlFor="lastName">Last Name</label>
                        <input className="form-control" id="lastName" type="text" {...formik.getFieldProps('lastName')} placeholder="(Optional) Doe" />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className="invalid-feedback">{formik.errors.lastName}</div>
                        ) : null}
                    </div>
                    <LocationSelect formik={formik} />
                    <div className="col-12 mb-2">
                        <label className="form-label" htmlFor="address">Address</label>
                        <input className="form-control" id="address" type="text" {...formik.getFieldProps('address')} placeholder="Address Here, we'll keep is safe" />
                        {formik.touched.address && formik.errors.address ? (
                            <div className="invalid-feedback">{formik.errors.address}</div>
                        ) : null}
                    </div>
                    <div className="col-12 mb-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="acceptMail" value="1" {...formik.getFieldProps('acceptMail')} />
                            <label className="form-label" htmlFor="acceptMail">Agree to accept mail from event creators</label>
                        </div>
                    </div>
                    <div className="col-12 mb-2 d-grid">
                        <button type="submit" className="btn btn-radius btn-success bg-gradient text-capitalize mb-2" disabled={!formik.isValid}>Submit</button>
                        <button type="button" className="btn btn-radius btn-outline-secondary text-capitalize mb-2" onClick={() => prev(formik.values)}>Back</button>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default StepTwo
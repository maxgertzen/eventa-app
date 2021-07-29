import React from 'react';
import InputCounter from '../InputCounter/InputCounter';
import { signupSchemaStepThree } from '../../../utils/RegisterFormValidation';
import { Formik } from 'formik';

const StepThree = ({ data, next, prev }) => {
    const handleSubmit = (values) => {
        next(values, true)
    }
    return (
        <Formik
            initialValues={data}
            validationSchema={signupSchemaStepThree}
            onSubmit={handleSubmit}
        >
            {formik => (
                <form className="m-auto row text-left text-white" onSubmit={formik.handleSubmit}>
                    <h6>Couple of optional details ..</h6>
                    <div className="col-md-12 col-12 mb-2">
                        <label className="form-label" htmlFor="bio">Bio</label><InputCounter count={formik.values.bio} max={250} />
                        <textarea className="form-control" id="bio" name="bio" {...formik.getFieldProps('bio')} placeholder="Tell us about yourself"></textarea>
                        {formik.touched.bio && formik.errors.bio ? (
                            <div className="invalid-feedback">{formik.errors.bio}</div>
                        ) : null}
                    </div>
                    <div className="col-md-12 col-12 mb-2">
                        <label className="form-label" htmlFor="birth_date">Date of Birth</label>
                        <input className="form-control" id="birth_date" type="date" name="birth_date" min="0" {...formik.getFieldProps('birth_date')} />
                        {formik.touched.birth_date && formik.errors.birth_date ? (
                            <div className="invalid-feedback">{formik.errors.birth_date}</div>
                        ) : null}
                    </div>
                    <div className="col-12 my-2 d-grid">
                        <button type="submit" className="btn btn-radius btn-success bg-gradient text-capitalize mb-2" disabled={!formik.isValid}>Submit</button>
                        <button type="button" className="btn btn-radius btn-outline-secondary text-capitalize mb-2" onClick={() => prev(formik.values)}>Back</button>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default StepThree
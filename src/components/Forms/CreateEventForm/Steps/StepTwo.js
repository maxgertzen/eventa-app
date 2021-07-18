import React from 'react';
import { eventFormStepTwoSchema } from '../../../../utils/EventFormValidation';
import { Formik } from 'formik';

const StepTwo = ({ data, next, prev }) => {
    const handleSubmit = (values) => {
        next(values)
    }
    return (
        <Formik
            initialValues={data}
            validationSchema={eventFormStepTwoSchema}
            onSubmit={handleSubmit}
        >
            {formik => (
                <form className="m-auto row text-left" style={{ width: '20vw' }} onSubmit={formik.handleSubmit}>
                    <div className="col-md-12 col-12 mb-2">
                        <label className="form-label" htmlFor="description">Description</label>
                        <textarea className="form-control" id="description" name="description" {...formik.getFieldProps('description')}></textarea>
                        {formik.touched.description && formik.errors.description ? (
                            <div className="invalid-feedback">{formik.errors.description}</div>
                        ) : null}
                    </div>
                    <div className="col-md-6 col-12 mb-2">
                        <label className="form-label" htmlFor="datestart">Date Start</label>
                        <input className="form-control" id="datestart" type="datetime-local" name="datestart" min="0" {...formik.getFieldProps('dateStart')} />
                        {formik.touched.price && formik.errors.price ? (
                            <div className="invalid-feedback">{formik.errors.dateStart}</div>
                        ) : null}
                    </div>
                    <div className="col-md-6 col-12 mb-2">
                        <label className="form-label" htmlFor="dateend">Date End</label>
                        <input className="form-control" id="dateend" type="datetime-local" name="dateend" min="0" {...formik.getFieldProps('dateEnd')} />
                        {formik.touched.price && formik.errors.price ? (
                            <div className="invalid-feedback">{formik.errors.dateEnd}</div>
                        ) : null}
                    </div>
                    <div className="col-md-12 col-12 mb-2">
                        <label htmlFor="formFile" className="form-label">Upload Image</label>
                        <input type="file" id="formFile" className="form-control" name="imageupload" onChange={event => formik.setFieldValue('imageupload', event.target.files[0])} />
                    </div>
                    <div className="col-12 mb-2 d-grid">
                        <button type="submit" className="btn btn-success text-capitalize mb-2" disabled={!formik.isValid}>Next</button>
                        <button type="button" className="btn btn-outline-secondary text-capitalize mb-2" onClick={() => prev(formik.values)}>Back</button>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default StepTwo
import React from 'react';
import { eventFormStepOneSchema } from '../../../../utils/EventFormValidation';
import { Formik } from 'formik';
import SwitchButton from '../../FormSwitchButton/SwitchButton';

const StepOne = ({ data, next }) => {
    const handleSubmit = (values, { setSubmitting }) => {
        next(values)
        setSubmitting(false)
    }
    return (
        <Formik
            initialValues={data}
            validationSchema={eventFormStepOneSchema}
            onSubmit={handleSubmit}
        >
            {formik => (
                <form className="m-auto row" onSubmit={formik.handleSubmit}>
                    <div className="col-md-11 col-1 mb-2">
                        <label className="form-label" htmlFor="name">Name</label><span style={{ float: 'right', fontSize: 'smaller' }}>[{formik.values.name?.length} / 65]</span>
                        <input className={`form-control ${formik.isValid && formik.touched.name ? 'is-valid' : formik.errors.name ? 'is-invalid' : ''}`} id="name" type="text" {...formik.getFieldProps('name')} placeholder="Event Name Here" />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="invalid-feedback">{formik.errors.name}</div>
                        ) : null}
                    </div>
                    <div className="col-md-1 col-1 d-flex flex-column align-items-end justify-items-center mb-2">
                        <label className="form-label" htmlFor="isPublic">Public</label>
                        <SwitchButton id="isPublic" type="checkbox" name="isPublic" checked={formik.values.isPublic} {...formik.getFieldProps('isPublic')} />
                    </div>
                    <div className="col-md-8 col-12 mb-2">
                        <label className="form-label" htmlFor="category">Category</label>
                        <select className="form-select" id="category" name="category" {...formik.getFieldProps('category')}>
                            <option>Select Category</option>
                            <option value="1">Music</option>
                            <option value="2">Visual Arts</option>
                            <option value="3">Theatre</option>
                            <option value="4">Film</option>
                            <option value="5">Technology</option>
                            <option value="6">Party or Social Gathering</option>
                        </select>
                        {formik.touched.category && formik.errors.category ? (
                            <div className="invalid-feedback">{formik.errors.category}</div>
                        ) : null}
                    </div>
                    <div className="col-md-4 col-10 mb-2">
                        <label className="form-label" htmlFor="price">Price</label>
                        <input className="form-control" id="price" type="number" name="price" min="0" {...formik.getFieldProps('price')} />
                        {formik.touched.price && formik.errors.price ? (
                            <div className="invalid-feedback">{formik.errors.price}</div>
                        ) : null}
                    </div>
                    <div className="col-md-12 col-12 my-3 d-grid">
                        <button type="submit" className="btn btn-radius btn-info text-capitalize" disabled={!formik.isValid}>Next Step</button>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default StepOne
import React from 'react';
import { Formik } from 'formik';
import { eventSchema } from '../../../utils/EventFormValidation';
import SwitchButton from '../FormSwitchButton/SwitchButton';
import { initialValues } from './utils';
import VenueSelect from './VenueSelect';

const CreateEventForm = ({ submitToServer }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={eventSchema}
            onSubmit={async (values, { setSubmitting }) => {
                let data = new FormData();
                for (const key in values) {
                    data.append(key, values[key]);
                }
                await submitToServer(data);
                setSubmitting(false);
            }}
        >
            {formik => (
                <form className="m-auto row" onSubmit={formik.handleSubmit}>
                    <div className="col-md-12 col-12 mb-2">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input className={`form-control ${formik.isValid && formik.touched.name ? 'is-valid' : formik.errors.name ? 'is-invalid' : ''}`} id="name" type="text" {...formik.getFieldProps('name')} placeholder="Event Name Here" />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="invalid-feedback">{formik.errors.name}</div>
                        ) : null}
                    </div>
                    <div className="col-md-6 col-12 mb-2">
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
                    <div className="col-md-5 col-10 mb-2">
                        <label className="form-label" htmlFor="price">Price</label>
                        <input className="form-control" id="price" type="number" name="price" min="0" {...formik.getFieldProps('price')} />
                        {formik.touched.price && formik.errors.price ? (
                            <div className="invalid-feedback">{formik.errors.price}</div>
                        ) : null}
                    </div>
                    <div className="col-md-1 col-2 d-flex flex-column align-items-center justify-items-center mb-2">
                        <label className="form-label" htmlFor="isPublic">Public</label>
                        <SwitchButton id="isPublic" type="checkbox" name="isPublic" value="1" {...formik.getFieldProps('isPublic')} />
                    </div>
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
                    <VenueSelect formik={formik} />
                    <div className="col-md-12 col-12 mb-2 d-grid">
                        <button type="submit" className="btn btn-primary" disabled={!formik.isValid || !formik.dirty}>Create</button>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default CreateEventForm;
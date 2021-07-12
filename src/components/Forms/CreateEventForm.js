import React from 'react';
import { Formik } from 'formik';
import { eventSchema } from '../../utils/EventFormValidation';
import SwitchButton from './FormSwitchButton/SwitchButton';


const CreateEventForm = ({ submitToServer }) => {
    return (
        <Formik
            initialValues={{ name: '', category: '', description: '', price: '', isPublic: false, dateStart: new Date(), dateEnd: new Date() }}
            validationSchema={eventSchema}
            onSubmit={async (values, { setSubmitting }) => {
                await submitToServer(values);
                setSubmitting(false);
            }}
        >
            {formik => (
                <form className="m-auto row" style={{ width: '50vw' }} onSubmit={formik.handleSubmit}>
                    <div className="col-11 mb-2">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input className={`form-control ${formik.isValid && formik.touched.name ? 'is-valid' : formik.errors.name ? 'is-invalid' : ''}`} id="name" type="text" {...formik.getFieldProps('name')} />
                        {formik.touched.name && formik.errors.name ? (
                            <div class="invalid-feedback">{formik.errors.name}</div>
                        ) : null}
                    </div>
                    <div className="col-1 d-flex flex-column align-items-end justify-items-center mb-2">
                        <label className="form-label" htmlFor="isPublic">Public</label>
                        <SwitchButton id="isPublic" type="checkbox" name="isPublic" {...formik.getFieldProps('isPublic')} />
                    </div>
                    <div className="col-6 mb-2">
                        <label className="form-label" htmlFor="category">Category</label>
                        <select className="form-select" id="category" name="category" defaultValue="Select Category" {...formik.getFieldProps('category')}>
                            <option>Select Category</option>
                            <option value="1">Music</option>
                            <option value="2">Visual Arts</option>
                            <option value="3">Theatre</option>
                            <option value="4">Film</option>
                            <option value="5">Technology</option>
                            <option value="6">Party or Social Gathering</option>
                        </select>
                        {formik.touched.category && formik.errors.category ? (
                            <div class="invalid-feedback">{formik.errors.category}</div>
                        ) : null}
                    </div>
                    <div className="col-6 mb-2">
                        <label className="form-label" htmlFor="price">Price</label>
                        <input className="form-control" id="price" type="number" name="price" min="0" {...formik.getFieldProps('price')} />
                        {formik.touched.price && formik.errors.price ? (
                            <div class="invalid-feedback">{formik.errors.price}</div>
                        ) : null}
                    </div>
                    <div className="col-12 mb-2">
                        <label className="form-label" htmlFor="description">Description</label>
                        <textarea className="form-control" id="description" name="description" {...formik.getFieldProps('description')}></textarea>
                        {formik.touched.description && formik.errors.description ? (
                            <div class="invalid-feedback">{formik.errors.description}</div>
                        ) : null}
                    </div>
                    <div className="col-6 mb-2">
                        <label className="form-label" htmlFor="datestart">Date Start</label>
                        <input className="form-control" id="datestart" type="datetime-local" name="datestart" min="0" {...formik.getFieldProps('dateStart')} />
                        {formik.touched.price && formik.errors.price ? (
                            <div class="invalid-feedback">{formik.errors.dateStart}</div>
                        ) : null}
                    </div>
                    <div className="col-6 mb-2">
                        <label className="form-label" htmlFor="dateend">Date End</label>
                        <input className="form-control" id="dateend" type="datetime-local" name="dateend" min="0" {...formik.getFieldProps('dateEnd')} />
                        {formik.touched.price && formik.errors.price ? (
                            <div class="invalid-feedback">{formik.errors.dateEnd}</div>
                        ) : null}
                    </div>
                    <div className="col-12 mb-2 d-grid">
                        <button type="submit" className="btn btn-primary" disabled={!formik.isValid || !formik.dirty}>Create</button>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default CreateEventForm;
import React from 'react';
import { Formik } from 'formik';
import { eventSchema } from '../../utils/EventFormValidation';
import './CreateEventForm.css'


const CreateEventForm = () => {
    return (
        <Formik
            initialValues={{ name: '', description: '', price: '', isPublic: false }}
            validationSchema={eventSchema}
            onSubmit={async (values, { setSubmitting }) => {
                // await addLogUser(values, formAction);
                // authorize()
                setSubmitting(false);
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" {...formik.getFieldProps('name')} />
                    {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                    ) : null}
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" {...formik.getFieldProps('description')}></textarea>
                    {formik.touched.description && formik.errors.description ? (
                        <div>{formik.errors.description}</div>
                    ) : null}
                    <label htmlFor="price">Price</label>
                    <input id="price" type="number" name="price" min="0" {...formik.getFieldProps('price')} />
                    {formik.touched.price && formik.errors.price ? (
                        <div>{formik.errors.price}</div>
                    ) : null}
                    <label htmlFor="isPublic">Public</label>
                    <label className="switch">
                        <input id="isPublic" type="checkbox" name="isPublic" {...formik.getFieldProps('isPublic')} />
                        <span className="slider round"></span>
                    </label>

                    <button type="submit" disabled={!formik.isValid}>Create</button>
                </form>
            )}
        </Formik>
    );
}

export default CreateEventForm;
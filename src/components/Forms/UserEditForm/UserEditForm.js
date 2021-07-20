import React from 'react';
import LocationSelect from './LocationSelect';

const UserEditForm = ({ formik }) => {
    return (<form id="edit-user" className="m-auto row" onSubmit={formik.handleSubmit}>
        <div className="col-md-6 col-12 mb-2">
            <label className="form-label" htmlFor="first_name">First Name</label>
            <input className={`form-control ${formik.isValid && formik.touched.first_name ? 'is-valid' : formik.errors.first_name ? 'is-invalid' : ''}`} id="first_name" type="text" {...formik.getFieldProps('first_name')} placeholder="First Name" />
            {formik.touched.first_name && formik.errors.first_name ? (
                <div className="invalid-feedback">{formik.errors.first_name}</div>
            ) : null}
        </div>
        <div className="col-md-6 col-12 mb-2">
            <label className="form-label" htmlFor="last_name">Last Name</label>
            <input className={`form-control ${formik.isValid && formik.touched.last_name ? 'is-valid' : formik.errors.last_name ? 'is-invalid' : ''}`} id="last_name" type="text" {...formik.getFieldProps('last_name')} placeholder="Last Name" />
            {formik.touched.last_name && formik.errors.last_name ? (
                <div className="invalid-feedback">{formik.errors.last_name}</div>
            ) : null}
        </div>
        <div className="col-md-12 col-12 mb-2">
            <label className="form-label" htmlFor="bio">Bio</label>
            <textarea className="form-control" id="bio" name="bio" {...formik.getFieldProps('bio')} placeholder="Tell us about yourself ..."></textarea>
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
        {/* <div className="col-md-12 col-12 mb-2">
            <label htmlFor="formFile" className="form-label">Upload Image</label>
            <input type="file" id="formFile" className="form-control" name="imageupload" onChange={event => formik.setFieldValue('imageupload', event.target.files[0])} />
        </div> */}
        <fieldset>
            <legend>Address Details</legend>
            <LocationSelect formik={formik} />
        </fieldset>
    </form>)
}

export default UserEditForm;
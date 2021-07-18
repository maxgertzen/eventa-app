import React from 'react';
import { eventFormStepThreeSchema } from '../../../../utils/EventFormValidation';
import { Formik } from 'formik';
import VenueSelect from '../VenueSelect';

const StepThree = ({ data, next, prev }) => {
    const handleSubmit = (values) => {
        next(values, true)
    }
    return (
        <Formik
            initialValues={data}
            validationSchema={eventFormStepThreeSchema}
            onSubmit={handleSubmit}
        >
            {formik => (
                <form className="m-auto row text-left" style={{ width: '20vw' }} onSubmit={formik.handleSubmit}>
                    <fieldset>
                        <legend>Venue Details</legend>
                        <VenueSelect formik={formik} />
                    </fieldset>
                    <div className="col-12 mb-2 d-grid">
                        <button type="submit" className="btn btn-success text-capitalize mb-2" disabled={!formik.isValid}>Submit</button>
                        <button type="button" className="btn btn-outline-secondary text-capitalize mb-2" onClick={() => prev(formik.values)}>Back</button>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default StepThree
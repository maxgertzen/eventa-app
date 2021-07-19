import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Formik } from 'formik';
import { eventSchema } from '../../utils/EventFormValidation';
import EditEventForm from '../Forms/EditEventForm/EditEventForm';
import { initialValuesBuilder } from '../../utils/functionConstructors';

const ModalBoxEdit = ({ id, submitToServer, editableEvent, onHide, ...rest }) => {
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        let data = initialValuesBuilder(editableEvent);
        setEventData(data);
    }, [editableEvent]);

    return (
        <>
            {id && submitToServer && editableEvent ? (
                <Modal {...rest} onHide={onHide}>
                    <Modal.Header>
                        <Modal.Title id={id}>
                            Edit Event
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {eventData ?
                            <Formik
                                enableReinitialize={true}
                                initialValues={eventData}
                                validationSchema={eventSchema}
                                onSubmit={async (values, { setSubmitting }) => {
                                    const { cities, ...rest } = values;
                                    let data = new FormData();
                                    for (const key in rest) {
                                        data.append(key, rest[key]);
                                    }
                                    console.log(data)
                                    await submitToServer(id, data);
                                    setSubmitting(false);
                                }}
                            >
                                {formik => (
                                    <EditEventForm formik={formik} />)
                                }
                            </Formik>
                            :
                            <Spinner animation="border" variant="warning" />
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHide}>Close</Button>
                        <Button variant="outline-warning" type="submit" form="edit-event">Confirm</Button>
                    </Modal.Footer>
                </Modal>) : null}
        </>
    )
}

export default ModalBoxEdit;
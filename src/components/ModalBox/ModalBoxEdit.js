import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Formik } from 'formik';
import { eventSchema } from '../../utils/EventFormValidation';
import EditEventForm from '../Forms/EditEventForm/EditEventForm';

const ModalBoxEdit = ({ id, submitToServer, editableEvent, onHide, ...rest }) => {
    const [eventData, setEventData] = useState({
        name: '',
        category: '',
        description: '',
        price: 0,
        isPublic: false,
        dateStart: new Date(),
        dateEnd: new Date(),
        imageupload: null,
        country: 'None',
        city: 'None',
        cities: [],
        venueId: '',
        venueName: '',
        address: ''
    });

    useEffect(() => {
        setEventData(prev => ({
            ...prev,
            ...editableEvent
        }))
        console.log(eventData)
    }, [editableEvent])
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
                        {eventData.eventName ?
                            <Formik
                                enableReinitialize
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
                        <Button variant="danger" type="submit" form="edit-event">Confirm</Button>
                    </Modal.Footer>
                </Modal>) : null}
        </>
    )
}

export default ModalBoxEdit;
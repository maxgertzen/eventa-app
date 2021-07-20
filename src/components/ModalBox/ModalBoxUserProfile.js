import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Formik } from 'formik';
import { userSchema } from '../../utils/UserFormValidation';
import UserEditForm from '../Forms/UserEditForm/UserEditForm';
import { initialValuesUser } from '../../utils/functionConstructors';

const ModalBoxUserProfile = ({ id, submitToServer, userInfo, onHide, ...rest }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        let data = initialValuesUser(userInfo);
        setUserData(data);
    }, [userInfo]);

    return (
        <>
            {id && submitToServer && userInfo ? (
                <Modal {...rest} onHide={onHide}>
                    <Modal.Header>
                        <Modal.Title id={id}>
                            Edit Your Details
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {userData ?
                            <Formik
                                enableReinitialize={true}
                                initialValues={userData}
                                validationSchema={userSchema}
                                onSubmit={async (values, { setSubmitting }) => {
                                    const { cities, ...rest } = values;
                                    let data = new FormData();
                                    for (const key in rest) {
                                        data.append(key, rest[key]);
                                    }
                                    await submitToServer(id, data);
                                    setSubmitting(false);
                                }}
                            >
                                {formik => (
                                    <UserEditForm formik={formik} />)
                                }
                            </Formik>
                            :
                            <Spinner animation="border" variant="warning" />
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHide}>Close</Button>
                        <Button variant="outline-warning" type="submit" form="edit-user">Confirm</Button>
                    </Modal.Footer>
                </Modal>) : null}
        </>
    )
}

export default ModalBoxUserProfile;
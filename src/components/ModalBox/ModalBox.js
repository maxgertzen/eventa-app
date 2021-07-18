import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const ModalBox = ({ id, actionFunc, userEventName, onHide, ...rest }) => {
    return (
        <>
            {id && actionFunc && userEventName ? (
                <Modal {...rest} onHide={onHide}>
                    <Modal.Header>
                        <Modal.Title id={id}>
                            Attention!
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete {userEventName}?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHide}>Close</Button>
                        <Button variant="danger" onClick={() => actionFunc(id)}>Delete</Button>
                    </Modal.Footer>
                </Modal>) : null}
        </>
    )
}

export default ModalBox;
import React from 'react';

const ModalBox = ({ id, actionFunc, userEventName }) => {
    return (
        <>
            {id && actionFunc && userEventName ? (
                <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={`${id}Label`}>
                                    Attention!
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Are you sure you want to delete {userEventName}?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={actionFunc}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>) : null}
        </>
    )
}

export default ModalBox;
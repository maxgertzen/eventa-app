import React from 'react';

const ModalBox = ({ id, ref, modal, actionFunc, userEventName }) => {
    return (
        <>
            {id && actionFunc && userEventName ? (
                <div className="modal fade" ref={ref} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={`${id}Label`}>
                                    Attention!
                                </h5>
                                <button type="button" className="btn-close" onClick={() => modal.hide()} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Are you sure you want to delete {userEventName}?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => modal.hide()}>Close</button>
                                <button type="button" className="btn btn-danger" onClick={actionFunc}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>) : null}
        </>
    )
}

export default ModalBox;
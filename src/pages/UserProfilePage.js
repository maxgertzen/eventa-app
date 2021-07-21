import React, { useState } from 'react';
import DateFormat from '../components/Date/DateFormat';
import ModalBoxUserProfile from '../components/ModalBox/ModalBoxUserProfile';
import { FiEdit } from 'react-icons/fi';
import { updateUserDetails } from '../api/index';

const UserProfilePage = ({ info, notifyUserChanges }) => {
    const [showUserModal, setShowUserModal] = useState(false);

    const closeEdit = () => setShowUserModal(false);
    const openEdit = () => setShowUserModal(true)


    const handleUpdate = async (userId, newData) => {
        try {
            await updateUserDetails(userId, newData);
            closeEdit();
            notifyUserChanges()
        } catch (error) {

        }
    }

    return (
        <article className="user-profile col-12 col-md-10">
            <ModalBoxUserProfile show={showUserModal} onHide={closeEdit} contentClassName="bg-dark text-white" id={info.user_id} userInfo={info} submitToServer={handleUpdate} />
            <section className="h-100 mx-auto d-flex justify-content-center align-items-center" style={{ width: 'fit-content' }}>
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-4 text-center">
                        <img src='/avatar_placeholder.png' alt="avatar" style={{ borderRadius: '50%' }} height="300" width="300" className="my-3 img-fluid" /></div>
                    {/* <button className="text-start btn btn-primary p-0" type="button" onClick={() => openEdit()}>
                    Edit
                    <FiEdit className="mx-3" /></button> */}
                    <div className="col-12 col-md-8">
                        <div className="text-start">
                            <h5>{info.first_name} {info.last_name}</h5>
                            <p>{info.email}</p>
                        </div>
                        <div className="text-start my-4">
                            <h6 className="text-muted">Bio</h6>
                            <p>{!info.bio ? '. . .' : info.bio}</p>
                        </div>
                        <div className="text-start my-4">
                            <h6 className="text-muted">Birthday</h6>
                            <p>{info.birth_date ? <DateFormat dateString={info.birth_date} long={true} /> : '. . .'}</p>
                        </div>
                        <div className="text-start my-4">
                            <h6 className="text-muted">Location</h6>
                            <p><span className="fw-bolder">Address :</span>{info.address ? ` ${info.address}` : `\t. . .`}</p>
                            <p><span className="fw-bolder">City :</span>{info.City ? ` ${info.City}` : `\t. . .`}</p>
                            <p><span className="fw-bolder">Country :</span>{info.Country ? ` ${info.Country}` : `\t. . .`}</p>
                        </div>
                    </div>
                </div>
            </section>
        </article >
    )
}

export default UserProfilePage
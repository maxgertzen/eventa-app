import React, { useState } from 'react';
import { getUserEvents, deleteEvent, editEvent } from '../api/index';
import EventTable from '../components/EventsManage/EventTable';
import NoEventsYet from '../components/EventsManage/NoEventsYet';
import ModalBoxDelete from '../components/ModalBox/ModalBoxDelete';
import ModalBoxEdit from '../components/ModalBox/ModalBoxEdit';

const EventsManagePage = ({ userEvents, setUserEvents }) => {
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [currentEvent, setCurrentEvent] = useState({});

    const closeDelete = () => setShowDelete(false);
    const closeEdit = () => setShowEdit(false);

    const handleShowEdit = (showCurrentEvent) => {
        setCurrentEvent(prev => ({ ...prev, ...showCurrentEvent }));
        setShowEdit(true)
    }

    const handleShowDelete = (showCurrentEvent) => {
        setCurrentEvent(prev => ({
            ...prev,
            ...showCurrentEvent
        }));
        setShowDelete(true);
    }

    const handleDelete = async (eventId) => {
        await deleteEvent(eventId);
        closeDelete();
        const { data } = await getUserEvents()
        setUserEvents(data);
    }


    const handleUpdate = async (eventId, eventUpdatedData) => {
        try {
            await editEvent(eventId, eventUpdatedData);
            closeEdit();
            const { data } = await getUserEvents()
            setUserEvents(data);
        } catch (error) {

        }
    }


    return (
        <article className="col-12 col-md-10">
            <ModalBoxEdit show={showEdit} onHide={closeEdit} contentClassName="bg-dark text-white" id={currentEvent.event_id} editableEvent={currentEvent} submitToServer={handleUpdate} />
            <ModalBoxDelete show={showDelete} onHide={closeDelete} contentClassName="bg-dark text-white" id={currentEvent.event_id} currentEvent={currentEvent} actionFunc={handleDelete} />
            {
                userEvents?.length
                    ?
                    <EventTable userEvents={userEvents} handleDelete={handleShowDelete} handleEdit={handleShowEdit} />
                    :
                    <NoEventsYet />

            }
        </article>
    )
}

export default EventsManagePage;
import React, { useState } from 'react';
import { getUserEvents, deleteEvent, editEvent } from '../api/index';
import EventTable from '../components/EventsManage/EventTable';
import NoEventsYet from '../components/EventsManage/NoEventsYet';
import ModalBoxDelete from '../components/ModalBox/ModalBoxDelete';
import ModalBoxEdit from '../components/ModalBox/ModalBoxEdit';

const EventsManagePage = ({ userEvents, setUserEvents }) => {
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [currentEvent, setCurrentEvent] = useState({
        event_id: 0,
        eventName: 'temp'
    });

    const handleClose = () => setShow(false);
    const closeEdit = () => setShowEdit(false);

    const handleShowEdit = (showCurrentEvent) => {
        setCurrentEvent(showCurrentEvent);
        setShowEdit(true)
    }

    const handleShow = (showCurrentEvent) => {
        setCurrentEvent(showCurrentEvent);
        setShow(true);
    }

    const handleDelete = async (eventId) => {
        await deleteEvent(eventId);
        handleClose();
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
        <article className="col-10">
            <ModalBoxEdit show={showEdit} onHide={closeEdit} id={currentEvent.event_id} editableEvent={currentEvent} submitToServer={handleUpdate} />
            <ModalBoxDelete show={show} onHide={handleClose} id={currentEvent.event_id} userEventName={currentEvent.eventName} actionFunc={handleDelete} />
            {
                userEvents?.length
                    ?
                    <EventTable userEvents={userEvents} handleDelete={handleShow} handleEdit={handleShowEdit} />
                    :
                    <NoEventsYet />

            }
        </article>
    )
}

export default EventsManagePage;
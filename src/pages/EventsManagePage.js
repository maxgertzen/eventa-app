import React, { useState } from 'react';
import { getUserEvents, deleteEvent } from '../api/index';
import EventTable from '../components/EventsManage/EventTable';
import NoEventsYet from '../components/EventsManage/NoEventsYet';
import ModalBox from '../components/ModalBox/ModalBox';
const EventsManagePage = ({ userEvents, setUserEvents }) => {
    const [show, setShow] = useState(false);
    const [currentEvent, setCurrentEvent] = useState({
        id: 1,
        name: 'temp'
    });

    const handleClose = () => setShow(false)
    const handleShow = (eventId, name) => {
        setCurrentEvent({
            id: eventId,
            name
        });
        setShow(true);
    }

    const handleDelete = async (eventId) => {
        await deleteEvent(eventId);
        handleClose();
        const { data } = await getUserEvents()
        setUserEvents(data);
    }


    return (
        <article className="col-10">
            <ModalBox show={show} onHide={handleClose} id={currentEvent.id} userEventName={currentEvent.name} actionFunc={handleDelete} />
            {
                userEvents?.length
                    ?
                    <EventTable userEvents={userEvents} handleDelete={handleShow} />
                    :
                    <NoEventsYet />

            }
        </article>
    )
}

export default EventsManagePage;
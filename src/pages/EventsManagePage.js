import React, { useState, useEffect, useRef } from 'react';
import { getUserEvents, deleteEvent } from '../api/index';
import EventTable from '../components/EventsManage/EventTable';
import NoEventsYet from '../components/EventsManage/NoEventsYet';

const EventsManagePage = ({ userEvents, setUserEvents }) => {
    // const [modal, setModal] = useState(null);
    // const [currentEvent, setCurrentEvent] = useState({
    //     id: 1,
    //     name: 'temp'
    // });
    // const deleteModal = useRef();

    // useEffect(() => {
    //     setModal(
    //         new Modal(deleteModal.current)
    //     )
    // }, [])

    const handleDelete = async (eventId) => {
        await deleteEvent(eventId);
        // modal.close()
        const { data } = await getUserEvents()
        setUserEvents(data);
    }

    // const openModal = (eventId, eventName) => {
    //     setCurrentEvent({ id: eventId, name: eventName })
    //     setModal(new Modal(deleteModal.current));
    //     modal.show()
    // }

    return (
        <article className="col-10">
            {
                userEvents?.length
                    ?
                    <EventTable userEvents={userEvents} handleDelete={handleDelete} />
                    :
                    <NoEventsYet />

            }
        </article>
    )
}

export default EventsManagePage;
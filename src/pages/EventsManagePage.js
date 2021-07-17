import React, { useState, useEffect } from 'react';
import { getUserEvents, deleteEvent } from '../api/index';
import EventTable from '../components/EventsManage/EventTable';
import NoEventsYet from '../components/EventsManage/NoEventsYet';

const EventsManagePage = () => {
    const [userEvents, setUserEvents] = useState([])
    // const [eventModal, setEventModal] = useState({
    //     id: '',
    //     name: ''
    // });

    useEffect(() => {
        const callApi = async () => {
            const { data } = await getUserEvents()
            setUserEvents(data);
        }
        callApi()
    }, [])

    /*     const activateModal = (eventId, eventName) => {
            setEventModal({ id: eventId, name: eventName })
        } */

    const handleDelete = async (eventId) => {
        await deleteEvent(eventId);
        const { data } = await getUserEvents()
        setUserEvents(data);
    }
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
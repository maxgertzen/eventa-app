import React, { useState, useEffect } from 'react';
import { getUserEvents } from '../api/index';
import { deleteEvent } from '../api/index';
import EventTable from '../components/EventTable/EventTable';
import ModalBox from '../components/ModalBox/ModalBox';

const DashboardPage = () => {
    const [userEvents, setUserEvents] = useState([])
    const [eventModal, setEventModal] = useState({
        id: '',
        name: ''
    });

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
        <article className="container">
            <ModalBox id={eventModal.id} userEventName={eventModal.name} actionFunc={handleDelete} />
            <h1>Dashboard</h1>
            {userEvents?.length && (
                <EventTable userEvents={userEvents} handleDelete={handleDelete} />
            )}
        </article>
    )
}

export default DashboardPage
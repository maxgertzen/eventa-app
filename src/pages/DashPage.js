import React, { useState, useEffect } from 'react';
import { getUserEvents } from '../api/index';
import EventCard from '../components/EventCard/EventCard';
import EventTable from '../components/EventTable/EventTable';

const DashPage = () => {
    const [userEvents, setUserEvents] = useState([])
    useEffect(() => {
        const callApi = async () => {
            const { data } = await getUserEvents()
            setUserEvents(data);
        }
        callApi()
    }, [])
    return (
        <article>
            <h1>Dashboard</h1>
            {userEvents?.length && (
                <EventTable userEvents={userEvents} />
            )}
        </article>
    )
}

export default DashPage
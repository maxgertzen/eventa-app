import React from 'react';
import { useHttp } from '../hooks/useHttp';
import { useRouteMatch } from 'react-router-dom'
import { getEventById } from '../api/index'
const EventPage = () => {
    const eventId = useRouteMatch('/events/show/:eventId');
    const {
        response: eventDetails,
        error,
        loading
    } = useHttp({
        ...getEventById,
        url: eventId.url
    });

    return (
        <section className="my-3">
            {eventDetails && (
                <h3 className="text-capitalize text-center">{eventDetails.name}</h3>
            )}
        </section>
    )
}

export default EventPage
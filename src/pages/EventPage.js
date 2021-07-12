import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../api/index';

const EventPage = () => {
    const { eventId: id } = useParams();
    const [eventDetails, setEventDetails] = useState({});

    useEffect(() => {
        const getEventData = async (eventId) => {
            try {
                const { data } = await getEventById(eventId);
                setEventDetails(data);
            } catch (error) {
                console.error(error.response)
            }
        }
        getEventData(id)
    }, [])

    return (
        <>
            {eventDetails && (
                <section className="my-3">
                    <img src="/image-placeholder.png" alt={`${eventDetails.eventName}`} className="w-20 img-fluid" width="400" style={{ float: 'left' }} />
                    <article>
                        <h3 className="text-capitalize text-center">{eventDetails.eventName}</h3>
                        <p>{eventDetails.venueName}</p>
                        <p>{eventDetails.description}</p>
                    </article>
                </section>
            )}
        </>
    )
}

export default EventPage
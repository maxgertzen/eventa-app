import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../api/index';
import DateFormat from '../components/Date/DateFormat';
import TimeFormat from '../components/Date/TimeFormat';

const EventPage = () => {
    const { eventId: id } = useParams();
    const [eventDetails, setEventDetails] = useState({});

    useEffect(() => {
        const getEventData = async (eventId) => {
            try {
                const { data } = await getEventById(eventId);
                setEventDetails(data);
                console.log(data)
            } catch (error) {
                console.error(error.response)
            }
        }
        getEventData(id)
    }, [])

    return (
        <>
            {eventDetails && (
                <section className="my-3 text-center" style={{ backgroundColor: 'yellow' }}>
                    <img src="/image-placeholder.png" alt={`${eventDetails.eventName}`} className="w-20 img-fluid" width="400" />
                    <h3 className="text-capitalize">{eventDetails.eventName}</h3>
                    <article>
                        <p>{eventDetails.venueName}</p>
                        <p>{eventDetails.description}</p>
                        <div className="d-flex m-auto justify-content-between" style={{ maxWidth: '200px' }}>
                            <TimeFormat dateString={eventDetails.dateStart} />
                            <DateFormat dateString={eventDetails.dateStart} />
                        </div>
                    </article>
                </section>
            )}
        </>
    )
}

export default EventPage
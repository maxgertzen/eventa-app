import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../api/index';
import DateFormat from '../components/Date/DateFormat';
import TimeFormat from '../components/Date/TimeFormat';
import { FiInfo, FiCalendar, FiLink2, FiDisc } from 'react-icons/fi';
import { ImPriceTag } from 'react-icons/im';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useHistory } from "react-router-dom";

const EventPage = () => {
    const { eventId: id } = useParams();
    const [eventDetails, setEventDetails] = useState({});
    let history = useHistory();

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

    const handleClick = () => {
        history.goBack()
    }

    return (
        <>
            {eventDetails && (
                <section className="text-white mt-3 d-flex flex-column justify-content-center align-items-center">
                    <IoChevronBackOutline className="d-block back-button" role="button" onClick={() => handleClick()} style={{ transform: 'scale(2)' }} />
                    <article className="text-center my-3 p-3 shadow bg-less-dark" style={{ maxWidth: '320px', height: 'fit-content' }}>
                        <img src={eventDetails.image} alt={`${eventDetails.eventName}`} className="w-20 img-fluid" width="400" />
                        <h3 className="text-capitalize my-2">{eventDetails.eventName}</h3>
                        <section className="event-info text-start my-3">
                            <h6 className="text-muted"><FiInfo /> Information</h6>
                            <p>{eventDetails.description}</p>
                        </section>
                        <section className="event-time text-start my-3">
                            <h6 className="text-muted"><FiCalendar /> Date & Time </h6>
                            <DateFormat long={true} dateString={eventDetails.dateStart} /> at <TimeFormat dateString={eventDetails.dateStart} />
                        </section>
                        <section className="event-location text-start my-3">
                            <h6 className="text-muted"><FiDisc /> Location</h6>
                            {eventDetails.venueName ? <em>{eventDetails.venueName}</em> : null}
                            <p>{`${eventDetails.address ? `${eventDetails.address}, ` : ''}${eventDetails.city}`}<br />{`${eventDetails.country}`}</p>
                        </section>
                        <section className="event-price text-start my-3">
                            <h6 className="text-muted"><ImPriceTag /> Price</h6>
                            <p>{eventDetails.price ? `${eventDetails.price} $` : 'Free'}</p>
                        </section>
                        {eventDetails.link && (<section className="event-link text-start my-3">
                            <h6 className="text-muted"><FiLink2 /> Link</h6>
                            <p><a href={eventDetails.link}>{eventDetails.link}</a></p>
                        </section>)}
                        <section className="event-actions d-grid">
                            <button className="btn btn-outline-success" type="button">
                                Save
                            </button>
                        </section>
                    </article>
                </section>
            )}
        </>
    )
}

export default EventPage

// city: "Los Angeles"
// country: "United States"
// address: "42 Nichols Avenue"
// dateEnd: "2020-06-06T18:50:00.000Z"
// dateStart: "2020-06-06T18:00:00.000Z"
// description: "Tearful performance"
// eventName: "Maybe Daddy Go Back"
// image: "/image-placeholder.png"
// isPublic: 1
// price: 80
// venueDesc: "Taverna e Caverna"
// venueId: 3
// venueName: "Papadopole"
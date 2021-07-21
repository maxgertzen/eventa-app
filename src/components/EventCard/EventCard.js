import React from 'react';
import { Link } from 'react-router-dom';
// import { formatDate } from '../../utils/helperFunctions';
import styled from 'styled-components';
import DateFormat from '../Date/DateFormat';
import { FiCalendar } from 'react-icons/fi';

const CardWrapper = styled.div`
    height: 250px;
    margin: auto;
    border-radius: 5px;
    display:flex;
    padding-right: 15px;
    transform: scale(1);
    transition: transform 0.15s linear;
    
    :hover {
        transform: scale(1.02);
    }

    img {
        width: 50%;
        height: 100%;
        object-fit: cover;
        margin-right: 10px;
    };

    .card-middle {
        width: 50%;
        height: 100%;
        padding: 10px;
        position: relative;
    };

    .card-action {
        position: absolute;
        bottom: 10px;
    };
`

const TruncateText = styled.div`
    width: 100%;
    margin: 0 0 1em 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: ${props => props.line || 3};
    -webkit-box-orient: vertical;  
`

const EventCard = ({ event }) => {
    return (
        <Link className="no-decoration" to={`/events/${event["event_id"]}`}>
            <CardWrapper className="m-3 bg-less-dark text-white shadow" style={{ width: '25rem' }} role="button">
                <img src={event.image || "/image-placeholder.png"} alt={`${event.name}`} onError={(e) => { e.target.onerror = null; e.target.src = "/image-placeholder.png" }} />
                <div className="card-middle">
                    <TruncateText className="card-title text-capitalize fw-bolder" line={3} style={{ maxHeight: '75px' }}>
                        {event.eventName}<br />
                        <span className="badge bg-info text-dark">{event.categoryName}</span>
                    </TruncateText>

                    <TruncateText>
                        <p className="text-muted" style={{ fontSize: 'smaller' }}>
                            {event.description}
                        </p></TruncateText>
                    {event.venueName ? <em>{event.venueName}</em> : null}
                    {event.city ? <p>{`${event.address}, ${event.city}`}<br />{`${event.country}`}</p> : null}
                    <div className="card-action d-flex flex-column justify-content-center">
                        <div className="time-wrapper my-2">
                            <FiCalendar /><DateFormat dateString={event.dateStart} long={true} className="text-muted fw-bolder m-2" /></div>
                        <button className="btn btn-radius btn-outline-success">More Details</button>
                    </div>
                </div>
            </CardWrapper>
        </Link>
    )
}

export default EventCard;
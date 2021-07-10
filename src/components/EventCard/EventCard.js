import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/helperFunctions';

const EventCard = ({ event }) => {
    return (
        <div className="card m-3" style={{ width: '18rem' }}>
            <img src={event.image || "/image-placeholder.png"} className="card-img-top" alt={`${event.name}`} />
            <div className="card-body">
                <h5 className="card-title">
                    {event.name}
                </h5>
                <p className="card-text text-truncate">
                    {event.description}
                </p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        {formatDate(event.dateStart).join(' ')}
                    </li>
                    <li className="list-group-item">
                        {formatDate(event.dateEnd).join(' ')}
                    </li>
                </ul>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <Link className="btn btn-primary" to={`events/show/${event["event_id"]}`}>Show More</Link>
                <Link className="btn btn-success" to={`events/show/${event["event_id"]}/reserve`}>Reserve</Link>
            </div>
        </div>
    )
}

export default EventCard;
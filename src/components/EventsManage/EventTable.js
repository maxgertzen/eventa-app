import React from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import DateFormat from '../Date/DateFormat';
import TimeFormat from '../Date/TimeFormat';

const EventTable = ({ userEvents: events, handleDelete }) => {
    return (
        events && (
            <div className="table-responsive">
                <table className="table table-hover m-auto responsive" style={{ maxWidth: '85vw' }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Start Time</th>
                            <th scope="col">End Time</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((userEvent, index) => {
                            return (
                                <tr key={userEvent.event_id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{userEvent.eventName}</td>
                                    <td>{userEvent.price || 'Free'}</td>
                                    <td><DateFormat dateString={userEvent.dateStart} /></td>
                                    <td><DateFormat dateString={userEvent.dateEnd} /></td>
                                    <td><TimeFormat dateString={userEvent.dateStart} /></td>
                                    <td><TimeFormat dateString={userEvent.dateEnd} /></td>
                                    <td><FaPen style={{ marginRight: '20px', marginLeft: '2px' }} role="button" onClick={() => console.log(`Edit ${userEvent.event_id}`)} />
                                        <FaTrashAlt role="button" onClick={() => handleDelete(userEvent.event_id)} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table></div>)
    )
}

export default EventTable;
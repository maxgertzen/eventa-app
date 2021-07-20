import React from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import DateFormat from '../Date/DateFormat';
import TimeFormat from '../Date/TimeFormat';
import CustomCircleButton from '../CustomCircleButton/CustomCircleButton'
const EventTable = ({ userEvents: events, handleDelete, handleEdit }) => {
    return (
        events && (
            <div className="table-responsive mt-5">
                <table className="table table-dark table-striped table-hover m-auto responsive" style={{ maxWidth: '75vw' }}>
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
                                    <td>{userEvent.name}</td>
                                    <td>{userEvent.price || 'Free'}</td>
                                    <td><DateFormat dateString={userEvent.dateStart} /></td>
                                    <td><DateFormat dateString={userEvent.dateEnd} /></td>
                                    <td><TimeFormat dateString={userEvent.dateStart} /></td>
                                    <td><TimeFormat dateString={userEvent.dateEnd} /></td>
                                    <td><CustomCircleButton title="Edit" size={24} style={{ marginRight: '8px' }} onClick={() => handleEdit(userEvent)}><FaPen /></CustomCircleButton>
                                        <CustomCircleButton title="Delete" size={24} onClick={() => handleDelete(userEvent)}><FaTrashAlt /></CustomCircleButton>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table></div>)
    )
}

export default EventTable;
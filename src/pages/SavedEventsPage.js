import React, { useContext, useState, useEffect } from 'react';
import AuthApi from '../store/AuthApi';
import EventCard from '../components/EventCard/EventCard';
import NoEventsYet from '../components/EventsManage/NoEventsYet'
const SavedEventsPage = () => {
    const { allEvents, savedEvents } = useContext(AuthApi);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        let getSaved = allEvents.filter(el => {
            return savedEvents.some(s => {
                return s.event_id === el.event_id
            })
        })
        setFiltered(getSaved);
        return () => {
            setFiltered([]);
        }
    }, [savedEvents])
    return (<article className="col-12 col-md-10">
        <h2 className="text-center my-2">Your Saved Events</h2>
        <div className="row d-flex justify-content-center">
            {
                filtered.length ? (filtered.map(value => {
                    return <div style={{ width: 'fit-content' }}><EventCard key={value.event_id} event={value} /></div>
                })) : <NoEventsYet />
            }</div>
    </article>)
}

export default SavedEventsPage
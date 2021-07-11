import React, { useEffect } from 'react';
import { getEvents } from '../api';
import { useHttp } from '../hooks/useHttp';
import EventCard from '../components/EventCard/EventCard'
const ExplorePage = () => {
    const {
        response: events,
        error,
        loading
    } = useHttp(getEvents);

    useEffect(() => {

    }, [])

    return (
        <section className="explore d-flex flex-wrap justify-content-center my-2">
            {
                events && events.map(value => {
                    return (
                        <EventCard key={value["event_id"]} event={value} />
                    )
                })
            }
            {
                loading ? <h1>Loading</h1> : error
            }
        </section>
    )
}

export default ExplorePage
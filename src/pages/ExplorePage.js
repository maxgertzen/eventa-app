import React, { useEffect, useState } from 'react';
import { getEvents } from '../api';
import EventCard from '../components/EventCard/EventCard'
import SearchBox from '../components/SearchBox/SearchBox';

const ExplorePage = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const callApi = async () => {
            const { data } = await getEvents();
            setEvents(data);
        }
        callApi();
    }, [])

    const submitSearch = async (e) => {
        e.preventDefault();
        const { data } = await getEvents(e.target[0].value);
        setEvents(data);
    }

    return (
        <section className="explore">
            <SearchBox handleSearch={submitSearch} />
            <article className="d-flex flex-wrap justify-content-center my-2">
                {
                    events.length ? events.map(value => {
                        return (
                            <EventCard key={value["event_id"]} event={value} />
                        )
                    }) : null
                }
            </article>
        </section>
    )
}

export default ExplorePage
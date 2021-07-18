import React, { useEffect, useState } from 'react';
import { getEvents } from '../api';
import EventCard from '../components/EventCard/EventCard';
import SearchBox from '../components/SearchBox/SearchBox';
import SearchResults from '../components/SearchResults/SearchResults';

const ExplorePage = () => {
    const [events, setEvents] = useState([])
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const callApi = async () => {
            const { data } = await getEvents();
            setEvents(data);
            setSearchResults(data);
        }
        callApi();
    }, [])

    const submitSearch = async (e) => {
        e.preventDefault();
        let searchTerm = e.target[0].value.toLowerCase();
        const data = events.filter((singleEvent) => singleEvent.name.toLowerCase().includes(searchTerm) || singleEvent.description.toLowerCase().includes(searchTerm))
        // const { data } = await getEvents(e.target[0].value);
        setSearchResults(data);
    }

    const handleChange = async (e) => {
        let searchTerm = e.target.value.toLowerCase();
        let data = events.filter((singleEvent) => singleEvent.name.toLowerCase().includes(searchTerm) || singleEvent.description.toLowerCase().includes(searchTerm))
        if (!searchTerm.length) {
            data = events;
        }
        setSearchResults(data);
    }

    return (
        <section className="explore container">
            <SearchBox handleSearch={submitSearch} handleOnChange={handleChange} />
            <SearchResults results={searchResults} />
        </section>
    )
}

export default ExplorePage
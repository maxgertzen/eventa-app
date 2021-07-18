import React from 'react';
import EventCard from '../EventCard/EventCard';

const SearchResults = ({ results }) => {
    return (
        <article className="d-flex flex-wrap justify-content-center my-2">
            {
                results.length ? results.map(value => {
                    return (
                        <EventCard key={value["event_id"]} event={value} />
                    )
                }) : "No Results were found"
            }
        </article>
    )
}

export default SearchResults;
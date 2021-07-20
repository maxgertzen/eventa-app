import React from 'react';
import EventCard from '../EventCard/EventCard';

const SearchResults = ({ results }) => {
    return (
        <article className="d-flex flex-wrap justify-content-center my-2 text-white">
            {
                results.length ? results.map((value, index) => {
                    return (
                        <div data-aos="fade-right" data-aos-delay={`${(index + 10) * 3}`}>
                            <EventCard key={value["event_id"]} event={value} /></div>
                    )
                }) : "No Results were found"
            }
        </article>
    )
}

export default SearchResults;
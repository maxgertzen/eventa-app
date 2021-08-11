import React, { useState, useEffect } from 'react';
import EventCard from '../EventCard/EventCard';

const SearchResults = ({ results }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const debouncer = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => {
            clearTimeout(debouncer)
        }
    }, [results])
    return (
        <article className="d-flex flex-wrap justify-content-center my-2 text-white">
            {
                loading ?
                    (<div className="spinner-border text-light mt-5" style={{ width: '4rem', height: '4rem' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>)
                    : !loading && results ? results.map((value, index) => {
                        return (
                            <EventCard key={value["event_id"]} event={value} />
                        )
                    })
                        : <div className="my-5 text-center">No Results were found <div className="text-muted">please, try again</div></div>
            }
        </article>
    )
}

export default SearchResults;
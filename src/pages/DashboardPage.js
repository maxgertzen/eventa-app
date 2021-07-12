import React, { useState } from 'react'
import CreateEventForm from '../components/Forms/CreateEventForm';
import { addEvent } from '../api/index';
// import Cookies from 'js-cookie';

const DashboardPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState([]);

    const callApiAndSubmitting = async (values) => {
        setIsLoading(true);
        try {
            let { data } = await addEvent(values);
            setResponse(data);
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setResponse(error)
            setIsLoading(false)
        }
    };

    return (
        <section>
            <h1>Create Event</h1>
            {response && (<h5>{response}</h5>)}
            {!isLoading && !response
                ? <CreateEventForm submitToServer={callApiAndSubmitting} />
                : (<div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>)}
        </section>
    )
}

export default DashboardPage

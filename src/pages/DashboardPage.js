import React, { useState } from 'react'
import CreateEventForm from '../components/Forms/CreateEventForm';
import { addEvent } from '../api/index';
// import Cookies from 'js-cookie';

const DashboardPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState({
        message: '',
        error: ''
    });

    const callApiAndSubmitting = async (values) => {
        setIsLoading(true);
        try {
            let data = await addEvent(values);
            if (data.ok) {
                setResponse((prevResponse) => ({
                    ...prevResponse,
                    message: data.message
                }))
            } else {
                setResponse((prevResponse) => ({
                    ...prevResponse,
                    error: data.error
                }))
            }
            setResponse(data);
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    };

    return (
        <section>
            <h1>Create Event</h1>
            {response.message ? (<div className="alert alert-success m-auto" role="alert">
                {response.message}
            </div>) : response.error ? (
                <div className="alert alert-danger m-auto" role="alert">
                    {response.error}
                </div>
            ) : null}
            {!isLoading
                ? <CreateEventForm submitToServer={callApiAndSubmitting} />
                : (<div className="spinner-border text-success m-auto" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>)}
        </section>
    )
}

export default DashboardPage

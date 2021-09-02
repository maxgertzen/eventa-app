import React, { useState, useCallback } from 'react'
import MultiStepCreateEvent from '../components/Forms/CreateEventForm/MultiStepCreateEvent'
import { addEvent } from '../api/index';
import { debounce } from 'lodash'
import { useHistory } from 'react-router-dom';


const AddEventPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [serverResponse, setServerResponse] = useState({
        status: null,
        message: ''
    });

    const history = useHistory();

    const debouncedRedirect = useCallback(
        (id) => {
            debounce(history.push(`/events/${id}`), 3000)
        },
        [history],
    )

    const callApiAndSubmitting = async (values) => {
        setIsLoading(true);
        try {
            let response = await addEvent(values);
            setServerResponse({
                status: response.status,
                message: response.data.message
            })
            setIsLoading(false)
            debouncedRedirect(response.data.id)
        } catch (error) {
            setServerResponse({
                status: error.status,
                message: error.data.message
            })
            console.log(error)
            setIsLoading(false)
        }
    };

    return (
        <div className="container-fluid h-100 gx-0 text-white">
            <div className="row h-100 gx-0">
                <section className="col-12 col-md-10 mx-auto mt-5 flex-column">
                    {serverResponse.message &&
                        (<div className={`alert alert-${serverResponse.status === 200 ? 'success' : 'danger'} my-3`} role="alert">
                            {serverResponse.message}
                        </div>)}
                    {!isLoading
                        ? <MultiStepCreateEvent submitToServer={callApiAndSubmitting} />
                        : (<div className="spinner-border text-success m-auto" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>)}
                </section>
            </div>
        </div>
    )
}

export default AddEventPage

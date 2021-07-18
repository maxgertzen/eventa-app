import React, { useState } from 'react'
// import CreateEventForm from '../components/Forms/CreateEventForm/CreateEventForm';
import MultiStepCreateEvent from '../components/Forms/CreateEventForm/MultiStepCreateEvent'
import { addEvent } from '../api/index';
import styled from 'styled-components';

const FormWrapper = styled.section`
    width: 100%;
    padding-right: var(--bs-gutter-x,.75rem);
    padding-left: var(--bs-gutter-x,.75rem);
    margin-right: auto;
    margin-left: auto; 
    
    @media (min-width: 768px){
        width: 60%;
    }
`;
const AddEventPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [serverResponse, setServerResponse] = useState({
        status: null,
        message: ''
    });

    const callApiAndSubmitting = async (values) => {
        setIsLoading(true);
        try {
            let response = await addEvent(values);
            console.log(response)
            setServerResponse({
                status: response.status,
                message: response.data.message
            })
            setIsLoading(false)
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
        <FormWrapper>
            <h1>Create Event</h1>
            <div className="row">
                {serverResponse.message &&
                    (<div className={`alert alert-${serverResponse.status === 200 ? 'success' : 'danger'} m-auto w-80`} role="alert">
                        {serverResponse.message}
                    </div>)}
                {!isLoading
                    ? <MultiStepCreateEvent submitToServer={callApiAndSubmitting} />
                    : (<div className="spinner-border text-success m-auto" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>)}
            </div>
        </FormWrapper>
    )
}

export default AddEventPage

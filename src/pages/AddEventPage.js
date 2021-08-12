import React, { useState } from 'react'
// import CreateEventForm from '../components/Forms/CreateEventForm/CreateEventForm';
import MultiStepCreateEvent from '../components/Forms/CreateEventForm/MultiStepCreateEvent'
import { addEvent } from '../api/index';
import styled from 'styled-components';
import ImageGalleryDiv from '../components/ImageGalleryDiv/ImageGalleryDiv';

const FormWrapper = styled.section`
    width: 100%;
    min-height: 627px;
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
        <FormWrapper className="text-white">
            <div className="row g-0">
                <section className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
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
                <ImageGalleryDiv />
            </div>
        </FormWrapper>
    )
}

export default AddEventPage

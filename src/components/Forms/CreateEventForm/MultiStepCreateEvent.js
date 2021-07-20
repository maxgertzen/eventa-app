import React, { useState } from 'react';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';
import ProgressBar from 'react-bootstrap/ProgressBar';

// import { addEvent } from '../../../api/index';
// import { Redirect } from 'react-router-dom'

const MultiStepCreateEvent = ({ submitToServer: addEvent }) => {
    const [data, setData] = useState({
        name: '',
        category: '',
        description: '',
        price: 0,
        isPublic: false,
        dateStart: new Date(),
        dateEnd: new Date(),
        imageupload: null,
        country: 'None',
        city: 'None',
        cities: [],
        venueId: '',
        venueName: '',
        address: ''
    });
    const [error, setError] = useState("")
    const [currentStep, setCurrentStep] = useState(0)

    const submitToServer = async (values) => {
        try {
            const { cities, ...rest } = values;
            let data = new FormData();
            for (const key in rest) {
                data.append(key, rest[key]);
                console.log(key, rest[key])
            }
            console.log(data)
            await addEvent(data);
        } catch (error) {
            setError(error.message)
        }
    }

    const handleNextStep = (newData, final = false) => {
        setData(prev => ({ ...prev, ...newData }));

        if (final) {
            submitToServer(newData)
        } else {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handlePrevStep = (newData) => {
        setData(prev => ({ ...prev, ...newData }));
        setCurrentStep(prev => prev - 1);
    };

    const steps = [
        <StepOne next={handleNextStep} data={data} />,
        <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
        <StepThree next={handleNextStep} prev={handlePrevStep} data={data} />]

    return (
        <section className="col-10 mx-auto col-md-8 text-white">
            <ProgressBar striped variant="success" className="mbs-3" now={((currentStep) / (steps.length)) * 100} />
            <h1>Create Your Event</h1>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            {steps[currentStep]}
        </section>
    )
}

export default MultiStepCreateEvent;
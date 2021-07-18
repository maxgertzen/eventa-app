import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import { addLogUser } from '../../../api/index';
import { Redirect } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';

const MultiStepRegister = ({ children }) => {
    const [data, setData] = useState({
        email: "",
        password: "",
        passwordConfirmation: "",
        firstName: "",
        lastName: "",
        country: 'None',
        city: 'None',
        address: '',
        cities: [],
    });
    const [error, setError] = useState("")
    const [currentStep, setCurrentStep] = useState(0)

    const submitToServer = async (values) => {
        console.log(values)
        try {
            const { passwordConfirmation, cities, ...finalData } = values;
            console.log(finalData)
            const response = await addLogUser(finalData, "register");
            if (response.ok) return <Redirect to="/dashboard" />
        } catch (error) {
            setError(error)
            console.error(error)
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
        <StepOne next={handleNextStep} data={data}>{children}</StepOne>,
        <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />]

    return (
        <section>
            <ProgressBar striped variant="success" now={((currentStep) / (steps.length)) * 100} />
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            {steps[currentStep]}
        </section>
    )
}

export default MultiStepRegister;
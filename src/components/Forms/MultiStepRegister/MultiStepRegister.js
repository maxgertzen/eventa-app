import React, { useState, useContext } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import RegisterResponse from './RegisterResponse';
import { addLogUser } from '../../../api/index';
import ProgressBar from 'react-bootstrap/ProgressBar';
import AuthApi from '../../../store/AuthApi';

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
        acceptMail: false,
        cities: [],
    });
    const { authorizeApp } = useContext(AuthApi)
    const [currentResponse, setCurrentResponse] = useState(null)
    const [currentStep, setCurrentStep] = useState(0)

    const submitToServer = async (values) => {
        console.log(values)
        try {
            const { passwordConfirmation, cities, ...finalData } = values;
            const response = await addLogUser(finalData, "register");
            setCurrentResponse(response);
            authorizeApp()
            setCurrentStep(prev => prev + 1);
        } catch (error) {
            console.error(error)
            setCurrentResponse(error);
            setCurrentStep(prev => prev + 1);
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
        <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
        <RegisterResponse response={currentResponse} />
    ]

    return (
        <section className="d-flex flex-column my-5 mx-auto w-75">
            <h3 className="text-white text-center">Register</h3>
            <ProgressBar striped variant="success" now={((currentStep + 0.2) / (steps.length - 1)) * 100} className="my-5" />
            {steps[currentStep]}
        </section>
    )
}

export default MultiStepRegister;
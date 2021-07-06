import React, { useEffect } from 'react';
import { addLogUser } from '../../api';
import useForm from '../../hooks/useForm';
import { validate } from '../../utils/RegisterFormValidation';


const SigninForm = ({ formAction, notifySubmit }) => {
    const {
        handleChange,
        handleSubmit,
        errors,
        isSubmitting
    } = useForm(addLogUser, validate);

    useEffect(() => {
        if (notifySubmit) notifySubmit(isSubmitting)
    }, [isSubmitting])

    return (
        <form id={formAction} onSubmit={handleSubmit}>
            <input type="email" name="email" onChange={handleChange} placeholder="Enter Email" />
            {
                formAction === 'register' && errors.email && (
                    errors.email.map((value, index) => {
                        return <p key={index}>{value}</p>
                    })
                )
            }
            <input type="password" name="password" onChange={handleChange} placeholder="Enter Password" />
            {
                formAction === 'register' && errors.password && (
                    errors.password.map((value, index) => {
                        return <p key={index}>{value}</p>
                    })
                )
            }
            <button type="submit">
                {formAction}
            </button>
        </form>
    )
}

export default SigninForm;
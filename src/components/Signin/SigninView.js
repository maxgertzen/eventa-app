import React from 'react';
import SigninForm from './SigninForm';
import { addLogUser } from '../../api/index';

const SigninView = () => {
    const onSigninSubmit = (e) => {
        const { target: { email, password, id: path } } = e;
        addLogUser({
            email: email.value,
            password: password.value
        }, path)

    }
    return (
        <>
            <SigninForm formAction='register' handleSubmit={onSigninSubmit} />
            <SigninForm formAction='login' handleSubmit={onSigninSubmit} />
        </>
    )
}

export default SigninView
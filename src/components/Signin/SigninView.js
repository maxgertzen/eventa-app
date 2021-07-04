import React, { useState, useEffect } from 'react';
import SigninForm from './SigninForm';
import { addLogUser } from '../../api/index';
// import { Redirect } from 'react-router-dom';

const SigninView = () => {
    const [fireRedirect, setFireRedirect] = useState(false);

    return (
        <>
            <SigninForm formAction='register' notifySubmit={setFireRedirect} />
            <SigninForm formAction='login' />
            {fireRedirect ? 'SUCCESS' : ''}
        </>
    )
}

export default SigninView
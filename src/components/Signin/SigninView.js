import React, { useState } from 'react';
import SigninForm from './SigninForm';
// import { Redirect } from 'react-router-dom';

const SigninView = () => {
    const [fireRedirect, setFireRedirect] = useState(false);

    return (
        <>
            {/* <SigninForm formAction='register' notifySubmit={setFireRedirect} /> */}
            <SigninForm formAction='login' notifySubmit={setFireRedirect} />
            <div>
                {fireRedirect ? 'Sent to Server' : ''}
            </div>
        </>
    )
}

export default SigninView
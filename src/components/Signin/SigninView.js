import React, { useState, useEffect } from 'react';
import SigninForm from './SigninForm';
// import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie'



const SigninView = ({ auth, setAuth }) => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const checkAuthorization = () => {
            if (auth) setIsAuthorized(true)
            else setIsAuthorized(false)
        }
        checkAuthorization();
    }, [auth])

    const logOut = () => {
        setAuth(false)
        Cookies.remove('user')
    }

    const renderLogOut = () => <div>Logged In.<button type="button" onClick={() => logOut()}>Log Out</button></div>

    return (
        <>
            {/* <SigninForm formAction='register' notifySubmit={setFireRedirect} /> */}
            <div>
                {
                    isAuthorized ? renderLogOut() : <SigninForm formAction='login' notifySubmit={setAuth} />
                }
            </div>
        </>
    )
}

export default SigninView
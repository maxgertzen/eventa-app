import React, { useContext, useState } from 'react';
import SigninForm from './SigninForm';
import Cookies from 'js-cookie'
import AuthApi from '../../store/AuthApi';



const SigninView = () => {
    const Auth = useContext(AuthApi);
    const [userName, setUserName] = useState(() => {
        return Cookies.get('user') || ''
    });


    const checkAuthorization = () => {
        let userName = Cookies.get('user');
        if (userName) {
            Auth.setAuth(true);
            setUserName(userName)
            return
        }
        Auth.setAuth(false)
    }

    const logOut = () => {
        Cookies.remove('user')
        Auth.setAuth(false)
    }

    const renderLogOut = () => <div>Hello {userName} you are Logged In.<br /><button type="button" onClick={() => logOut()}>Log Out</button></div>

    return (
        <>
            <div>
                <h1>Signin</h1>
                <hr />
                {
                    Auth.auth ? renderLogOut() : <SigninForm formAction='login' authorize={checkAuthorization} />
                }
                <hr />
                {/* {
                    !Auth.auth && (<SigninForm formAction='register' authorize={checkAuthorization} />)
                } */}
            </div>
        </>
    )
}

export default SigninView
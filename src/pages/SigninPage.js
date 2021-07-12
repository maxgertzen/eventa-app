import React, { useContext, useState } from 'react';
import SigninForm from '../components/Forms/SigninForm';
import Cookies from 'js-cookie'
import AuthApi from '../store/AuthApi';



const SigninPage = () => {
    const Auth = useContext(AuthApi);
    const [userDetails, setUserDetails] = useState(() => {
        let splitted = Cookies.get('user')?.split('?');
        let newUser = splitted ? {
            id: splitted[0],
            firstName: splitted[1]
        } : {}
        return newUser;
    });


    const checkAuthorization = () => {
        let user = Cookies.get('user');
        if (user) {
            Auth.setAuth(true);
            let splitted = user.split('?');
            let newUser = splitted ? {
                id: splitted[0],
                firstName: splitted[1]
            } : {}
            setUserDetails(newUser)
            return
        }
        Auth.setAuth(false)
    }

    const logOut = () => {
        Cookies.remove('user')
        Auth.setAuth(false)
    }

    const renderLogOut = () => <div>Hello {userDetails.firstName} you are Logged In.<br /><button type="button" onClick={() => logOut()}>Log Out</button></div>

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

export default SigninPage
import React, { useContext, useState } from 'react';
import SigninForm from '../components/Forms/SigninForm';
import Cookies from 'js-cookie'
import AuthApi from '../store/AuthApi';
import { Link, Redirect } from 'react-router-dom'


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

    return (
        <div className="container">
            <div className="row h-100">
                <section className="col-6">
                    {
                        !Auth.auth ?
                            <SigninForm formAction='login' authorize={checkAuthorization}>
                                <p className="text-center">Don't have an account?<Link className="nav-link d-inline p-2" to="/register">Register Here.</Link></p>
                            </SigninForm>
                            :
                            <Redirect to="/dashboard" />
                    }
                </section>
                <section className="col-6">
                    <p>Image goes here</p>
                </section>
            </div>
        </div>
    )
}

export default SigninPage
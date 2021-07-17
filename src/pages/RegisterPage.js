import React, { useContext, useState, useEffect } from 'react';
// import SigninForm from '../components/Forms/SigninForm';
import Cookies from 'js-cookie'
import AuthApi from '../store/AuthApi';
import { Link, Redirect } from 'react-router-dom'
import MultiStepRegister from '../components/Forms/MultiStepRegister/MultiStepRegister';

const RegisterPage = () => {
    const Auth = useContext(AuthApi);
    const [userDetails, setUserDetails] = useState(() => {
        let splitted = Cookies.get('user')?.split('?');
        let newUser = splitted ? {
            id: splitted[0],
            firstName: splitted[1]
        } : {}
        return newUser;
    });

    useEffect(() => {
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
        checkAuthorization()
    }, [Auth])

    return (
        <div className="container">
            <div className="row h-100">
                <section className="col-6">
                    {
                        !Auth.auth || !("id" in userDetails) ?
                            <MultiStepRegister>
                                <p className="text-center">Already Registered?<Link className="nav-link d-inline p-2" to="/signin">Login Here.</Link></p>
                            </MultiStepRegister>
                            :
                            <Redirect to="/explore" />
                    }
                </section>
                <section className="col-6">
                    <p>Image goes here</p>
                </section>
            </div>
        </div>
    )
}

export default RegisterPage
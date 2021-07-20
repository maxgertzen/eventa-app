import React, { useContext, useState } from 'react';
import SigninForm from '../components/Forms/SigninForm';
import Cookies from 'js-cookie'
import AuthApi from '../store/AuthApi';
import { Link, Redirect } from 'react-router-dom'
import { addLogUser } from '../api/index';
import Alert from 'react-bootstrap/Alert';

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
    const [serverResponse, setServerResponse] = useState("");


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


    const callApiAndLog = async (values) => {
        try {
            const data = await addLogUser(values, 'login');
            if (data.ok) checkAuthorization();
        } catch (error) {
            console.error(error)
            setServerResponse(error.data.message);
        }
    }

    return (
        <div className="container">
            <div className="row h-100 d-flex justify-content-center align-items-center">
                <section className="col-12 col-md-6">
                    {serverResponse && (<Alert variant="danger" className="my-2">
                        <Alert.Heading></Alert.Heading>
                        {serverResponse}
                        <hr />
                        <p className="mb-0">
                            Please try again
                        </p>
                    </Alert>)}
                    {
                        !Auth.auth ?
                            <SigninForm formAction='login' authorize={checkAuthorization} submitToServer={callApiAndLog}>
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
import React, { useContext, useState } from 'react';
import SigninForm from '../components/Forms/SigninForm';
import Cookies from 'js-cookie'
import AuthApi from '../store/AuthApi';
import { Link, Redirect } from 'react-router-dom'
import { addLogUser } from '../api/index';
import Alert from 'react-bootstrap/Alert';
import ImageGalleryDiv from '../components/ImageGalleryDiv/ImageGalleryDiv';

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
            if (data.status === 200) {
                checkAuthorization();
                setServerResponse("")
            } else {
                setServerResponse(data.data);
            }
            if (data.ok)
                console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="container-fluid h-100 gx-0">
            <div className="row h-100 gx-0">
                <section className="col-12 col-md-6 flex-column">
                    <h3 className="text-center text-white my-5">Login</h3>
                    {serverResponse && (<Alert variant="danger" className="w-75 mx-auto">
                        <Alert.Heading></Alert.Heading>
                        {serverResponse}
                        <hr />
                        <p className="mb-0">
                            Please try again
                        </p>
                    </Alert>)}
                    {
                        !Auth.auth ?
                            <SigninForm authorize={checkAuthorization} submitToServer={callApiAndLog}>
                                <p className="text-center">Don't have an account?<Link className="nav-link d-inline p-2" to="/register">Register Here.</Link></p>
                            </SigninForm>
                            :
                            <Redirect to="/dashboard" />
                    }
                </section>
                <ImageGalleryDiv />
            </div>
        </div>
    )
}

export default SigninPage
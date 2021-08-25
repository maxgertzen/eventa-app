import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router';
import Alert from 'react-bootstrap/Alert';
import ImageGalleryDiv from '../components/ImageGalleryDiv/ImageGalleryDiv';
import { checkUserVerification } from '../api';

const VerificationPage = () => {
    const [serverResponse, setServerResponse] = useState({
        message: "",
        status: "warning"
    });
    const { search } = useLocation()

    const verifyUser = useCallback(async () => {
        let params = new URLSearchParams(search)
        return await checkUserVerification(params)
    }, [search])

    useEffect(() => {
        const verify = setTimeout(() => {
            const data = verifyUser()
            if (data.status === 200) {
                setServerResponse(prevState => ({
                    ...prevState,
                    message: data.message,
                    status: "success"
                }))
            } else {
                setServerResponse(prevState => ({
                    ...prevState,
                    message: data.data.message,
                    status: "danger"
                }))
            }
        }, 1000);

        return () => {
            clearInterval(verify)
        }
    }, [verifyUser])


    return (
        <div className="container-fluid h-100 gx-0">
            <div className="row h-100 gx-0">
                <section className="col-12 col-md-6 flex-column mh-91">
                    <h3 className="text-center text-white my-5">Login</h3>
                    {serverResponse && (<Alert variant={serverResponse.status} className="w-75 mx-auto">
                        <Alert.Heading></Alert.Heading>
                        {serverResponse.status === "warning" ? (<div className="spinner-border text-light mt-5" style={{ width: '4rem', height: '4rem' }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>) : serverResponse.message}
                    </Alert>)}
                </section>
                <ImageGalleryDiv />
            </div>
        </div>
    )
}

export default VerificationPage
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useHistory } from 'react-router';
import Alert from 'react-bootstrap/Alert';
import ImageGalleryDiv from '../components/ImageGalleryDiv/ImageGalleryDiv';
import { checkUserVerification } from '../api';

const VerificationPage = () => {
    const [serverResponse, setServerResponse] = useState({
        message: "",
        status: "warning"
    });
    const { search } = useLocation()
    const history = useHistory()

    const verifyUser = useCallback(async () => {
        let params = new URLSearchParams(search)
        if (!search) return search
        return await checkUserVerification(params)
    }, [search])

    useEffect(() => {
        const verify = setTimeout(() => {
            const data = verifyUser()
            data.then(res => {
                if (!res) {
                    history.push('/signin')
                    return
                }
                if (res.status === 200) {
                    setServerResponse(prevState => ({
                        ...prevState,
                        message: res.message,
                        status: "success"
                    }))
                    setTimeout(() => history.push('/dashboard'), 1500)
                } else {
                    setServerResponse(prevState => ({
                        ...prevState,
                        message: res.message,
                        status: "danger"
                    }))
                }
            })
        }, 2000);

        return () => {
            clearInterval(verify)
        }
    }, [verifyUser])


    return (
        <div className="container-fluid h-100 gx-0">
            <div className="row h-100 gx-0">
                <section className="col-12 col-md-6 flex-column mh-91">
                    <h3 className="text-center text-white my-5">Verification</h3>
                    {serverResponse && (<Alert variant={serverResponse.status} className="w-75 text-center mx-auto">
                        <Alert.Heading>{serverResponse.status === 'warning' ? 'Verifying' : serverResponse.status === 'danger' ? 'Error' : 'Verified!'}</Alert.Heading>
                        {serverResponse.status === "warning" ? (<div className="spinner-border text-black mx-auto" style={{ width: '4rem', height: '4rem' }} role="status">
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
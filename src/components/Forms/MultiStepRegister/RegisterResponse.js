import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

const RegisterResponse = ({ response }) => {

    return (
        <Alert variant={response.status === 200 ? "success" : "danger"}>
            <Alert.Heading>{response.status === 200 ? `Hey ${response.data.firstName}, Welcome` : `${response.data.message}`}</Alert.Heading>
            {response.status === 200 ?
                <p>
                    Start exploring events <Link to="/explore">Here</Link>.<br />
                    Or go to your dashboard <Link to="/dashboard">Here</Link>.
                </p>
                :
                <p>
                    Oh no something went wrong, please try again <Link to="/register">Here</Link>.</p>
            }
            <hr />
            <p className="mb-0">
                {response.status === 200 ? 'Enjoy!' : 'Sorry!'}
            </p>
        </Alert>
    )
}

export default RegisterResponse
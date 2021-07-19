import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

const NoEventsYet = () => {
    return (
        <Alert variant="info">
            <Alert.Heading>No Events Yet</Alert.Heading>
            <p>
                Create one <Link to="/addevent">Here</Link>,
                Or start exploring events <Link to="/explore">Here</Link>.<br />
            </p>
            <hr />
            <p className="mb-0">
                "Good Luck"
            </p>
        </Alert>)
}

export default NoEventsYet
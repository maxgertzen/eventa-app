import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthApi from '../../store/AuthApi';

const Protected = ({ children, ...rest }) => {
    const Auth = useContext(AuthApi)
    return (
        <Route
            {...rest}
            render={() => Auth.auth ? (
                { children }
            ) :
                (
                    <Redirect to='/signin' />
                )}
        />
    )
}

export default Protected
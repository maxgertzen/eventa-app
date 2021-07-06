import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Protected = ({ auth, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => auth ? (
                <Component />
            ) :
                (
                    <Redirect to='/signin' />
                )}
        />
    )
}

export default Protected
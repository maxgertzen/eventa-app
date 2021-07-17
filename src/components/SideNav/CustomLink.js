import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const CustomLink = ({ label, to, activeOnlyWhenExact }) => {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <Link className={`list-group-item list-group-item-action${match && ' active'}`} to={to}>{label}</Link>
    )
}

export default CustomLink
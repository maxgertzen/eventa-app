import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = ({ url, userName }) => {
    return (
        <nav className="nav nav-pills flex-row p-3 col-12 col-md-2 flex-sm-column order-last order-sm-first justify-content-md-start justify-content-sm-center bg-light" style={{ height: 'fit-content' }}>
            <h4 className="d-none d-md-block text-center">Dashboard</h4>
            <p className="d-none d-md-block text-center">Hello {userName}</p>
            <NavLink to={`${url}/profile`} className="flex-sm-fill text-sm-center nav-link" activeClassName="active">Profile</NavLink>
            <NavLink to={`${url}/events`} className="flex-sm-fill text-sm-center nav-link" activeClassName="active">Created Events</NavLink>
        </nav>
    )
}

export default SideNav
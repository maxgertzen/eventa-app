import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = ({ url, userName }) => {
    return (
        <aside className="col-12 col-md-2 order-sm-last order-md-first bg-less-dark">
            <nav className="nav nav-pills no-decoration flex-md-column flex-row p-3 justify-content-md-start justify-content-sm-center" >
                <h4 className="d-none d-md-block text-center">Dashboard</h4>
                <p className="d-none d-md-block text-center">Hello {userName}</p>
                <NavLink to={`${url}/profile`} className="flex-sm-fill info-pill text-sm-center nav-link" activeClassName="active">Profile</NavLink>
                <NavLink to={`${url}/events`} className="flex-sm-fill info-pill text-sm-center nav-link" activeClassName="active">Created Events</NavLink>
            </nav>
        </aside>
    )
}

export default SideNav
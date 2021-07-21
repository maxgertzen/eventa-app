import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = ({ url, userName }) => {
    return (
        <aside className="col-12 col-lg-2 order-md-last order-lg-first bg-less-dark">
            <nav className="nav nav-pills no-decoration flex-lg-column flex-row p-3 justify-content-lg-start justify-content-md-center" >
                <h4 className="d-none d-lg-block text-center">Dashboard</h4>
                <p className="d-none d-lg-block text-center">Hello {userName}</p>
                <NavLink to={`${url}/profile`} className="flex-md-fill info-pill text-md-center nav-link" activeClassName="active">Profile</NavLink>
                <NavLink to={`${url}/events`} className="flex-md-fill info-pill text-md-center nav-link" activeClassName="active">Created Events</NavLink>
            </nav>
        </aside>
    )
}

export default SideNav
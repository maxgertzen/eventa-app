import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = ({ children }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Eventa
                    {/* <img src="/FullColor_1280x1024_72dpi.png" alt="eventa logo" width="400" className="d-inline-block align-text-top" /> */}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {children}
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;



import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa'

const Navbar = () => {
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
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to='/dashboard' className="nav-link">Dashboard</Link></li>
                        <li className="nav-item"><Link to='/explore' className="nav-link">Explore</Link></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FaRegUserCircle /></a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/signin">Signin</Link></li>
                                <li><Link className="dropdown-item" to="/register">Register</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;



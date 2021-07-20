import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa'
import AuthApi from '../../store/AuthApi';
import Cookies from 'js-cookie'
const Navbar = ({ disconnect }) => {
    const Auth = useContext(AuthApi)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                    <ul className="navbar-nav d-none d-md-block" style={{ flex: 1 }}>
                        <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
                    </ul>
                    <Link className="navbar-brand" to="/" id="eventa-logo" style={{ flex: 1, textAlign: 'center' }}>
                        <img src="/logo_transparent_noText.png" className="d-inline-block" alt="eventa logo" width="30" height="24" style={{ marginBottom: '3px' }} />
                        Eventa
                    </Link>
                    <ul className="navbar-nav justify-content-end" style={{ flex: 1 }}>
                        {
                            Auth.auth &&
                            (<li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FaRegUserCircle /></a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <div className="disabled dropdown-item text-muted">Hello {Cookies.get('user').split('?')[1]}</div>
                                    <li><Link to='/dashboard' className="dropdown-item">Dashboard</Link></li>

                                    <li><a className="dropdown-item" href="/" onClick={() => disconnect()}>Log Out</a></li>
                                </ul>
                            </li>)
                        }
                        {Auth.auth && (<li className="nav-item"><Link to='/addevent' className="nav-link">Create</Link></li>)}
                        {!Auth.auth && <li className="nav-item"><Link className="nav-link" to="/signin">Signin / Register</Link></li>}
                        <li className="nav-item"><Link to='/explore' className="nav-link">Explore</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;



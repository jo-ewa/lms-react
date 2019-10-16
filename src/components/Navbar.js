import React from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
    return (
        <div id="Navbar">
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            Library Management System
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to="/new-books" className="nav-link">
                                        New Books
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/my-account" className="nav-link">
                                        My Account
                                    </Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

                <main className="container">
                    <Switch>
                        {props.children}
                    </Switch>
                </main>
            </Router>
        </div>
    );
}

export default Navbar;
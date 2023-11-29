import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar navbar-expand-lg bg-light navbar-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Burger <span>King</span></Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/feature" className="nav-item nav-link">Feature</Link>
                            <Link to="/chef" className="nav-item nav-link">Chef</Link>
                            <Link to="/menu" className="nav-item nav-link">Menu</Link>
                            <Link to="/booking" className="nav-item nav-link">Booking</Link>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu">
                                    <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                    <a href="single.html" className="dropdown-item">Blog Detail</a>
                                </div>
                            </div>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header

import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <i className="zmdi zmdi-fire"></i>
            </div>
            <div className="navbar-icons">
                <a href="home"><i className="zmdi zmdi-home active"></i></a>
                <a href="home"><i className="zmdi zmdi-folder"></i></a>
                <a href="home"><i className="zmdi zmdi-home"></i></a>
                <a href="home"><i className="zmdi zmdi-chart"></i></a>
                <a href="home"><i className="zmdi zmdi-home"></i></a>
                <a href="home"><i className="zmdi zmdi-folder"></i></a>
                <a href="home"><i className="zmdi zmdi-settings"></i></a>
            </div>

        </div>

    )
}

export default Navbar

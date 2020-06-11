import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/navbar_logo.png'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home"><img src={logo} alt="logo" width="120px" /></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                        <Link to="/" className="nav-link">
                            About
                        </Link>
                        <Link to="/" className="nav-link">
                            Browse
                        </Link>
                        <Link to="/register" className="nav-link">
                            Register
                        </Link>

                    </Nav>
                </Navbar>
            </>
        )
    }
}

export default NavBar
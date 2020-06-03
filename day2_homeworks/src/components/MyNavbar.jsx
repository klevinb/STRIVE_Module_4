import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'

class NavBar extends Component {
    render(){
        return(
            <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">BIG BOOK</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#browse">Browse</Nav.Link>
                </Nav>
            </Navbar>
            </>
        )
    }
}

export default NavBar
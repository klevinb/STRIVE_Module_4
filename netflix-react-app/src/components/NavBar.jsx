import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap'

function NavBar(props) {
    return (
        <Navbar variant='dark' expand="lg">
            <Navbar.Brand href="#home">
                <Image src="/images/icon.png" style={{ width: "100px", height: "60px" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">TV Shows</Nav.Link>
                    <Nav.Link href="#link">Movies</Nav.Link>
                    <Nav.Link href="#link">Recently Added</Nav.Link>
                    <Nav.Link href="#link">My List</Nav.Link>
                </Nav>
                <div className="d-flex my-3 my-lg-0">
                    <i className="fa fa-search icons mr-3"></i>
                    <div id="kids">KIDS</div>
                    <i className="fa fa-bell icons mx-3"></i>
                    <i className="fa fa-user icons mx-3"></i>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
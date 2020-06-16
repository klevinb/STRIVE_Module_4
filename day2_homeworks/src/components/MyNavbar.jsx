import React, { Component } from 'react'
import { Navbar, Nav, FormControl, DropdownMenu, Dropdown } from 'react-bootstrap'
import logo from '../assets/navbar_logo.png'

class NavBar extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home"><img src={logo} width="120px" /></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#browse">Browse</Nav.Link>
                    </Nav>
                    <Dropdown show={this.props.status} className="mt-5">
                        <Dropdown.Menu>
                            {this.props.users}
                        </Dropdown.Menu>
                    </Dropdown>
                    <FormControl onChange={(e) => this.props.search(e.currentTarget.value)} style={{ width: 200 }} type="text" placeholder="Search" className="mr-sm-2" />

                </Navbar>
            </>
        )
    }
}

export default NavBar
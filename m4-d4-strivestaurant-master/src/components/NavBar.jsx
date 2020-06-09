import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div>
      {console.log("navbar props", props)}
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Link to='/'>
          <Navbar.Brand>
            {props.title} - Striving For Food
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to='/menu' className={props.location.pathname === '/menu' ? "nav-link active" : "nav-link"}>
              Menu
            </Link>
            <Link to='/reservation' className={props.location.pathname === '/reservation' ? "nav-link active" : "nav-link"}>
              Reservation
            </Link>
            <Link to='/aboutUs' className={props.location.pathname === '/aboutUs' ? "nav-link active" : "nav-link"}>
              About Us
            </Link>
            <Link to='/location' className={props.location.pathname === '/location' ? "nav-link active" : "nav-link"}>
              Our Location
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(NavBar);

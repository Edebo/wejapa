import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../Services/Auth";
import "./Header.css";

const Header = () => {
  let history = useHistory();
  const signout = () => {
    logout();
    history.push("/login");
  };
  return (
    <Navbar collapseOnSelect expand='lg' className='navbar'>
      <Navbar.Brand>
        <Link to='/'>Wejapa</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link as={Link} to='/profile'>
            Profile
          </Nav.Link>
          <Button
            onClick={() => {
              signout();
            }}
            className='btn btn-warning'
          >
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

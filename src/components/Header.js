import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => (
    <header>
        <Navbar className="Navbar" expand="lg">
            <Navbar.Brand href="/" className="Logo">Codeamers</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#link">About us</Nav.Link>
                        <Nav.Link href="#home">Members</Nav.Link>
                        <Nav.Link href="#link">Contact us</Nav.Link> */}
                </Nav>
                <Form inline>
                    <NavLink to='/' className="Nav-Btn">Contact</NavLink>
                    <NavLink to="/about" className="Nav-Btn">About us</NavLink>
                    <NavLink to="/members" className="Nav-Btn">Members</NavLink>
                    <NavLink to="/contact" className="Nav-Btn">Contact us</NavLink>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </header>
)


export default Header;
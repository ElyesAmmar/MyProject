import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'


function Bar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">Elyes Ammar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" style={{ textDecoration: "none" }} >   <Nav.Link href="#features">Home</Nav.Link> </Link>
          <Link to="/dashboard" style={{ textDecoration: "none" }} >  <Nav.Link href="#pricing">Dashboard</Nav.Link> </Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bar;
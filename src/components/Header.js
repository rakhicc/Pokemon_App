import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
const Header = () => {
    return (
       
          <Navbar bg="dark" variant="dark" expand="lg">
       <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
          <LinkContainer to="/">
        <Nav.Link >Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="pokelist">
            <Nav.Link >PokeList</Nav.Link> 
            </LinkContainer>
            <LinkContainer to="favouritelist">
            <Nav.Link >Favourites</Nav.Link> 
            </LinkContainer>

      </Nav>
    </Navbar.Collapse>
  </Container>
    </Navbar>  
        
    );
};

export default Header;
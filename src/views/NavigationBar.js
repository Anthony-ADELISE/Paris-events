import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavigationBar.css';
function NavigationBar() {
return (
<Navbar className="navbar" bg="primary" expand="lg" variant="dark">
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
<LinkContainer to="/">
<Nav.Link className="link">Acceuil</Nav.Link>
</LinkContainer>
<LinkContainer to="/liste des évenements">
<Nav.Link className="link">Liste des évenement</Nav.Link>
</LinkContainer>
<LinkContainer to="/favoris">
<Nav.Link className="link">Favoris</Nav.Link>
</LinkContainer>
</Nav>
</Navbar.Collapse>
</Navbar>
);
}
export default NavigationBar;

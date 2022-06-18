import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/login">Login</NavLink>
          <Nav className="me-auto">
            <NavLink to="/product">Product</NavLink>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <ul>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </>
  );
};
export default Header;

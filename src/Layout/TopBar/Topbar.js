import React from 'react';
import {Navbar,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Topbar(){
return(
<Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
  <Navbar.Brand href="#home" >
</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto col-8">
      <Nav.Link href="#deets">Login</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">Register</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}
export default Topbar
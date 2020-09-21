import React from 'react';
import {Navbar,Nav,Form,FormControl,Button,DropdownButton,Dropdown,ButtonGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar(){
return(
<div>
    <Navbar className="justify-content-center" bg="light" variant="light">
      <Nav className="col-xl-12"  > 
         <Form inline className="justify-content-center bg-white  col-xl-12" >
         <img src="http://localhost/imagenesRCSreact/tienda-facil-logo.png"  width="200px" heigth="200px" alt="logo"/>
         <FormControl  type="text" placeholder="Search" className="mr-2 col-xl-8 " />
         <Button  variant="outline-success" >Search</Button>
        </Form>
     </Nav>
</Navbar>
<Navbar className="justify-content-center col-xl-12">
<Nav className="justify-content-center col-xl-12" justify variant="tabs" defaultActiveKey="/home">
    <ButtonGroup>
      <DropdownButton as={ButtonGroup} title="Categoria" id="bg-nested-dropdown">
         <Dropdown.Item eventKey="1">Accesorios</Dropdown.Item>
         <Dropdown.Item eventKey="2">Ropa</Dropdown.Item>
         <Dropdown.Item eventKey="3">Muebles</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
  <Nav.Item   >
  
    {/* <Nav.Link href="/home">inicio</Nav.Link> */}
       <Link className="nav-link" to="/home">Inicio</Link> 
     
  </Nav.Item>
  <Nav.Item >
  {/* <Nav.Link href="/home">otro</Nav.Link> */}
      <Link className="nav-link" to="/weus">Nosotros</Link> 
    
  </Nav.Item>
  <Nav.Item  > 
  {/* <Nav.Link href="/home">otro</Nav.Link> */}
      <Link className="nav-link" to="/contact">Contacto</Link>  
     
  </Nav.Item>
</Nav>
</Navbar>
</div>
)
}
export default SearchBar;

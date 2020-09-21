import React from 'react';
 import { Container,Row,Col } from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap-grid.min.css';
 import CarruselMain from '../../../Layout/carrusel/CarruselMain';
 import CarruselFirst from '../../../Layout/carrusel/CarruselFirst';
 import CarruselSecond from '../../../Layout/carrusel/CarruselSecond';
 import CarruselThird from '../../../Layout/carrusel/CarruselThird';
 import DataTable from '../../../Components/Table';
 import LocalBranch from '../../../Location/location';

function Indexhome() {
 
   return(
     <Container  className="p-md-2">
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row  className="p-md-2" >
    <Col className="justify-content-center col-xl-12 mr-2 p-md-2">
     <CarruselMain />
    </Col>
  </Row>
  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row >
    <Col xs={6} md={4}   className="p-md-2">
    <CarruselFirst />
    </Col>
    <Col xs={6} md={4}  className="p-md-2">
    <CarruselSecond />
    </Col>
    <Col xs={6} md={4}   className="p-md-2">
    <CarruselThird />
    </Col>
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row>
    <Col xs={6}   className="p-md-2">
      <img src="https://wuux.files.wordpress.com/2019/01/image.png" alt="WORPRESS"></img>
    <LocalBranch/>
    </Col >
    <Col xs={6}   className="p-md-2" >
      <DataTable />
    </Col>
  </Row>
</Container>
   );

}

export default Indexhome;

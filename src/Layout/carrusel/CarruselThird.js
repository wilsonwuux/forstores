import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function CarruselThird(){
    return(
        <>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://localhost/imagenesRCSreact/nuevo2.jpg"
      alt="First slide"
       height="200px" 
    />
    <Carousel.Caption>
      <h3  style={{background:'rgba(0, 137, 238, 0.60)'}}>NUEVO</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://localhost/imagenesRCSreact/nuevo.jpg"
      alt="Third slide"
       height="200px" 
    />

    <Carousel.Caption>
      <h3 style={{background:'rgba(0, 137, 238, 0.60)'}}>NUEVO</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://localhost/imagenesRCSreact/nuevo3.jpg"
      alt="Third slide"
       height="200px" 
    />

    <Carousel.Caption>
      <h3 style={{background:'rgba(0, 137, 238, 0.60)'}}>NUEVO</h3>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</>
)
}
export default CarruselThird;
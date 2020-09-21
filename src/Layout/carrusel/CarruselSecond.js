import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarruselSecond(){
    return(
        <>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://localhost/imagenesRCSreact/destacod1.jpg"
      alt="First slide"
      height="200px" 
    />
    <Carousel.Caption>
      <h3 style={{background:'rgba(0, 137, 238, 0.60)'}}>DESTACADO</h3>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://localhost/imagenesRCSreact/destacod2.jpg"
      alt="Third slide"
        height="200px" 
    />

    <Carousel.Caption>
      <h3 style={{background:'rgba(0, 137, 238, 0.60)'}}>DESTACADO</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://localhost/imagenesRCSreact/destacod3.jpg"
      alt="Third slide"
        height="200px" 
    />

    <Carousel.Caption>
      <h3 style={{background:'rgba(0, 137, 238, 0.60)'}}>DESTACADO</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</>
)
}
export default CarruselSecond;
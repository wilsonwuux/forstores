import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function CarruselMain(){
    return(
        <>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://localhost/imagenesRCSreact/BannerStores.jpg"
      alt="First slide"
      height="400px"  
     

    />
    <Carousel.Caption>
      <h3 className="text-white" style={{background:'rgba(0, 137, 238, 0.60)'}} >COMPRA FACIL</h3>
      <p className="text-white" style={{background:'rgba(0, 137, 238, 0.60)'}}> Lo que quieras lo temos cuando quiera y envios GRATIS </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://localhost/imagenesRCSreact/BannerStores2.jpg"
      alt="Third slide"
      height="400px" 
     
    />

    <Carousel.Caption>
      <h3  className="text-white " style={{background:'rgba(0, 137, 238, 0.60)'}}>TODO A TU ALCANCE</h3>
      <p className="text-white " style={{background:'rgba(0, 137, 238, 0.60)'}}>Lo que quieras lo temos cuando quiera y envios GRATIS</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://localhost/imagenesRCSreact/BannerStores3.jpg"
      alt="Third slide"
      height="400px" 
     
    />

    <Carousel.Caption>
      <h3 className="text-white " style={{background:'rgba(0, 137, 238, 0.60)'}}>LOS MEJORES PRODUCTOS</h3>
      <p className="text-white " style={{background:'rgba(0, 137, 238, 0.60)'}}>Lo que quieras lo temos cuando quiera y envios GRATIS</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</>
)
}
export default CarruselMain;
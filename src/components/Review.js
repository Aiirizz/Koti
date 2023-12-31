import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Img from "../assets/review/review1.jpg"
import Img2 from "../assets/review/review2.jpg"
import Img3 from "../assets/review/review3.jpg"
import BackImg from "../assets/benner1.png"
import '../components/css/Review.css'; // Sesuaikan dengan nama file CSS Anda


const ResponsiveBackgroundComponent = () => {

  return (
    <div class='content'>
      {/* Tampilan desktop */}
      <div className="d-none d-md-block">
        <h2 class = "caption"><span>Kata Mereka Tentang Koti... &nbsp;&nbsp;  </span></h2>
        <Container>
          <Row>
            <Col>
              <img src={Img} alt="Gambar 1" className="small-image" />
            </Col>
            <Col>
              <img src={Img2} alt="Gambar 2" className="small-image" />
            </Col>
            <Col>
              <img src={Img3} alt="Gambar 3" className="small-image" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Tampilan mobile */}
      <div className="d-block d-md-none">
        <div class = "slider">
          <h2 class = "caption"><span>Kata Mereka Tentang Koti... &nbsp;</span></h2>
          <Carousel indicators={true} controls={true} className="carousel-mobile">
            <Carousel.Item>
              <img src={Img} alt="Gambar 1" className="d-block w-100 small-image-mobile" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Img2} alt="Gambar 2" className="d-block w-100 small-image-mobile" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Img3} alt="Gambar 3" className="d-block w-100 small-image-mobile" />
            </Carousel.Item>
          </Carousel>
        </div>        
      </div>
    </div>
  );
};

export default ResponsiveBackgroundComponent;

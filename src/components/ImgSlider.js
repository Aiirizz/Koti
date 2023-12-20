import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/slider/Img1.jpg'

function DarkVariantExample() {

    const imgStyle = {
        objectFit: 'countain',
        height: '100vh', 
        width: '100%',
      };

  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item className="custom-carousel-item">
        <img
          src={img1}
          alt="IMAGE 1"
          style={imgStyle}
        />
        <Carousel.Caption className="custom-carousel-caption">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={img1}
          alt="IMAGE 2"
          style={imgStyle}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={img1}
          alt="IMAGE 3"
          style={imgStyle}

        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
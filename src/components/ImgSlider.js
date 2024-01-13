import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/slider/slide001.png'
import img2 from '../assets/slider/slide002.png'
import img3 from '../assets/slider/slide003.png'


function DarkVariantExample() {

    const imgStyle = {
        objectFit: 'countain',
        height: '100vh', 
        width: '100%',
      };

  return (
    <Carousel data-bs-theme="light" interval={2500}>
      <Carousel.Item className="custom-carousel-item">
        <img
          src={img1}
          alt="IMAGE 1"
          style={imgStyle}
        />
        <Carousel.Caption className="custom-carousel-caption">
          <h4>"Welcome to our coffee sanctuary where every sip tells a story."</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={img2}
          alt="IMAGE 2"
          style={imgStyle}
        />
        <Carousel.Caption>
          <h4>"Where the art of coffee meets the canvas of creativity.
             Sip, savor, and let the brushstrokes of flavor paint your day."</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={img3}
          alt="IMAGE 3"
          style={imgStyle}

        />
        <Carousel.Caption>
          <h4>"At our coffee haven, every brew and bite is a chapter waiting to be written. <br></br>
            Gather 'round, savor the flavors, and let the tales unfold."</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
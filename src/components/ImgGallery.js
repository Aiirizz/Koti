import React from 'react';
import '../components/css/ImgGallery.css'; // Import your custom CSS for styling
import img1 from "../assets/gallery/img1.jpg"
import img2 from "../assets/gallery/wfk002.jpg.png"
import img3 from "../assets/gallery/img3.jpg"
import img4 from "../assets/gallery/img4.jpg"
import img5 from "../assets/gallery/img5.jpg"
import img6 from "../assets/gallery/img6.jpg"


const ImgGallery = () => {
  // Replace these image paths with your actual image paths
  return (
    <div className="container">
      <h2 className="text-center">Work from Koti!!</h2>
      <div className="row">
        <div className="col-md-4">
          <img src={img1} alt="Image 1" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={img2} alt="Image 2" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={img3} alt="Image 3" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={img4} alt="Image 4" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={img5} alt="Image 5" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={img6} alt="Image 6" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default ImgGallery;
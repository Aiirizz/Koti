import React from 'react';
import '../components/css/ImgGallery.css'; // Import your custom CSS for styling
import img1 from "../assets/gallery/img1.png"

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
          <img src={img1} alt="Image 2" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={img1} alt="Image 3" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={img1} alt="Image 4" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={img1} alt="Image 5" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={img1} alt="Image 6" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default ImgGallery;
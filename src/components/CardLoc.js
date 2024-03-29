import React from 'react';
import imgBanner from "../assets/benner1.png"
import imgloc1 from "../assets/contact/kotiNusantara.png"
import imgloc2 from "../assets/contact/kotiSentosa.png"


const Card = ({ title, content, imageUrl, mapLink }) => (
  <div style={{ display:"flex", border: '2px solid black', padding: '16px', margin: '16px', borderRadius: '8px', textAlign: 'left' }}>
    <img src={imageUrl} alt={title} style={{ maxWidth: '20%', maxHeight: '100px', borderRadius: '4px', 
      transition: 'transform 0.3s ease-in-out',
      ':hover': {
        transform: 'scale(1.1)',
      },
    }} />
    <div style={{marginLeft: "16px", lineHeight: "1.1"}}>
        <h3 style={{ marginBottom: '8px' }}>{title}</h3>
        <p style={{ marginBottom: '8px' }}>{content}</p>
        <a href={mapLink} target='_blank'>See on Google Maps</a>
        </div>
  </div>
);

const DualCardComponent = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', border: "none" }}>
      <Card
        title="KOTI NUSANTARA RAYA"
        content="Jl. Nusantara Raya No.282, Depok Jaya, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16432"
        mapLink="https://maps.app.goo.gl/yHG1qx9kbErVKZZp9"
        imageUrl={imgloc1}  // Ganti URL gambar sesuai kebutuhan
      />
      <Card
        title="KOTI SENTOSA RAYA"
        content="Jl. Sentosa Raya No.25, RT.5/RW.15, Mekar Jaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16411"
        mapLink="https://maps.app.goo.gl/v3wfzsrdq7tUrt1u9"
        imageUrl={imgloc2}  // Ganti URL gambar sesuai kebutuhan

      />
    </div>
  );
};

export default DualCardComponent;
import NavigationBar from "../components/NavigationBar";
import imgBanner from "../assets/benner1.png"
import Footer from "../components/Footer"
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../components/CardLoc"
import "../pages/css/Contact.css"
import img1 from "../assets/contact/contact001.png"
import img2 from "../assets/contact/contact002.jpg"

import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';



export default function Contact(){

    const location = useLocation();

    useEffect(() => {
      // Fungsi untuk mengatur scroll ke elemen dengan class "content-2"
      const scrollToContent2 = () => {
        const content2Element = document.querySelector('.content-2');
        if (content2Element) {
          content2Element.scrollIntoView({ behavior: 'smooth' });
        }
      };
  
      // Cek apakah kita berpindah ke halaman ini dari halaman lain
      if (location.state && location.state.from === "menu-bt") {
        // Jika iya, tunggu sebentar sebelum melakukan scroll
        setTimeout(scrollToContent2, 100);
      } 
    }, [location]);

    return(
        <div className="box">
            <NavigationBar/> 
            <div class="content-1">
                <img className="element" alt="Element" src= {imgBanner} />
                <div class="title">
                    <h1>Hubungi Kami</h1>
                    <h3>Kopi Koti</h3>
                </div>  
            </div>    
            <div class="content-2">
                <div class = "left">
                    <div class="title-content">
                        <FontAwesomeIcon icon={faLocationDot} style={{fontSize: '10em', color: '#E49886'}}/>
                        <h1>Our Store</h1>
                    </div>
                    <div class="card">
                        <Card/>    
                    </div>
                </div>
                <div class="right">
                    <img src={img2}/>
                </div>       
            </div>    
            <div class="content-3">
                <div class = "left-3">
                    <img src={img1}/>
                </div>
                <div class = "right-3">
                    <div class = "title-2">
                        <h1>Ada Pertanyaan atau Komentar?</h1>
                        <h2>Cukup tulis pesan melalui</h2>
                    </div>
                    <div class = "isi">
                        <div class = "ig">
                            <FontAwesomeIcon icon={faInstagram} style={{fontSize: '4em', color: 'black'}}/>
                            <h4>@koti</h4>
                        </div>
                        <div class = "wa">
                            <FontAwesomeIcon icon={faWhatsapp} style={{fontSize: '4em', color: 'black'}}/>
                            <h4>+62 821 1495 7281</h4>
                        </div>
                    </div>                  
                </div>
            </div>
            <Footer/>
        </div>
    )
}
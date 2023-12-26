import NavigationBar from "../components/NavigationBar";
import imgBanner from "../assets/benner1.png"
import Footer from "../components/Footer"
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../components/CardLoc"
import "../pages/css/Contact.css"

export default function Contact(){

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
                    <img src={imgBanner}/>
                </div>       
            </div>    
            <div class="content-3">
                <div class = "left-3">
                    <img src={imgBanner}/>
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
                            <h4>+62 9280582093</h4>
                        </div>
                    </div>                  
                </div>
            </div>
            <Footer/>
        </div>
    )
}
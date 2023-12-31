import NavigationBar from "../components/NavigationBar";
import imgBanner from "../assets/benner1.png"
import Footer from "../components/Footer"
import Img from "../assets/about/about_001.jpg"
import Img2 from "../assets/about/about_002.jpg.png"
import "../pages/css/About.css"


export default function About(){

    return(
        <div className="box">
            <NavigationBar/> 
            <div class="content-1">
                <img className="element" alt="Element" src= {imgBanner} />
                <div class="title">
                    <h1>Tentang</h1>
                    <h3>Kopi Koti</h3>
                </div>
            </div>    
            <div className="content-2">
                <div class = "image1">
                    <img src={Img}/> 
                </div>
                <div className="isi1">    
                    <h6>About Koti</h6>
                    <h1>Cerita Kami</h1>
                    <h4>Koti, persembahan sebuah pengalaman eksklusif bagi para pecinta kopi dan pengunjung yang menghargai keindahan. 
                        Sebuah perjalanan singkat di dalamnya seolah membawa setiap pengunjung 
                        pada suatu petualangan rasional yang melibatkan indera penglihatan, penciuman, dan tentu saja, perasaan kenikmatan yang tak terlupakan. 
                        </h4>
            
                    <h4>Koti bukan hanya sekadar kedai kopi, melainkan ruang kebersamaan yang membawa kebahagiaan bagi setiap pengunjungnya.. </h4>
                </div>     
            </div>  

            <div className="content-3">
                <div class="isi2">
                    <h4>Sebuah kedai kopi yang mengusung konsep family-friendly, menawarkan pengalaman unik yang cocok untuk segala usia. 
                        Dengan desain interior yang ramah anak dan atmosfer yang hangat, 
                        Koti menjadi tempat yang ideal untuk keluarga dan juga tempat berkumpul bagi anak muda.</h4>
                </div>
                <div class = "image2">
                    <img src={Img2}/> 
                </div>
            </div>
            <Footer/>
        </div>
    )
}
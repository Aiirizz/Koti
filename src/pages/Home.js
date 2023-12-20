import NavigationBar from "../components/NavigationBar";
import ImgSlider from "../components/ImgSlider"
import imgBenner from "../assets/benner1.png"
import ImgGallery from "../components/ImgGallery"
import Footer from "../components/Footer"
import "./css/Home.css";

export default function Home(){

    return(
        <div className="box">
            <NavigationBar/> 
            <div class="content-1">
                <img className="element" alt="Element" src= {imgBenner} />
                <div class="title">
                    <h1>Kopi Koti</h1>
                    <h3>Coffeeshop & Rooftop Cafe</h3>
                </div>
            </div>
            <ImgSlider/>
            <ImgGallery/>
            <Footer/>
        </div>
    )
}
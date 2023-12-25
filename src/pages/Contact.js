import NavigationBar from "../components/NavigationBar";
import imgBanner from "../assets/benner1.png"
import Footer from "../components/Footer"



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
            <Footer/>
        </div>
    )
}
import NavigationBar from "../components/NavigationBar";
import imgBanner from "../assets/benner1.png"
import Footer from "../components/Footer"
import Img from "../assets/gallery/img2.png"
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
                    <h4>Koti bergerak di bidang food and beverage khususnya kopi. Dengan menu andalannya
                    kopi, koti juga menjual varian minuman lainnya seperti teh, minuman refreshing, milk
                    based, dan juga mocktail.</h4>
            
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h4>
                </div>     
            </div>  

            <div className="content-3">
                <div class="isi2">
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h4>
                </div>
                <div class = "image2">
                    <img src={Img}/> 
                </div>
            </div>
            <Footer/>
        </div>
    )
}
import NavigationBar from "../components/NavigationBar";
import imgBanner from "../assets/benner1.png"


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
        </div>
    )
}
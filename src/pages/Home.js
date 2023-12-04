import NavigationBar from "../components/NavigationBar";
import imgBenner from "../assets/benner1.png"
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
        </div>
    )
}
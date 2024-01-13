import NavigationBar from "../components/NavigationBar";
import imgBanner from "../assets/benner1.png"
import Footer from "../components/Footer";
import Food from "../components/Food"
import Beverages from "../components/Beverages"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import "../pages/css/Menu.css"

export default function Menu(){
    return(
        <div className="box">
            <NavigationBar/> 
            <div class="content-1">
                <img className="element" alt="Element" src= {imgBanner} />
                <div class="title">
                    <h1>Menu</h1>
                    <h3>Kopi Koti</h3>
                </div>  
            </div>
            <div class = "beli">
                <h2>Beli Di Sini</h2>
                <div className="button">
                    <Link to="../contact" state={{ from: 'menu-bt' }} className="styled-button">
                    Outlet Koti
                    </Link>
                    <Link to="https://linktr.ee/kotikopi" target="_blank" className="styled-button">
                    Online Food App
                    </Link>
                </div>
            </div>
            
            <Tabs
                defaultActiveKey="food" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="food" title={<span className="tab-title" style={{ color: '#E49886', fontSize: window.innerWidth <= 768 ? '18px' : '38px'}}>Makanan</span>}>
                        <Food/>
                    </Tab>
                    <Tab eventKey="beverage" title={<span className="tab-title" style={{ color: '#E49886',fontSize: window.innerWidth <= 768 ? '18px' : '38px'}}>Minuman</span>}>
                        <Beverages/>
                    </Tab>
            </Tabs>
        <Footer/>
        </div>
    )
}
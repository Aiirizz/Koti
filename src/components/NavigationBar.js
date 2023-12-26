import { Nav, Navbar, Container, NavDropdown, NavbarBrand, NavLink, NavbarCollapse } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logoImg from '../assets/lg-koti-circle.png'
import './css/Navbar.css'

const NavigationBar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "active" : "";
    };

    return (
      <Navbar className="navbar navbar-dark" style={{ backgroundColor: '#856C4B'}} collapseOnSelect expand="md">
        <Navbar.Brand className="logo">
          <img
          src = {logoImg}
          height='60'
          width='70'
          className="d-inline-block align-left"
          /> 
        </Navbar.Brand>
        <Navbar.Toggle className="custom-toggler" aria-controls="responsive-navbar-nav">
            <FontAwesomeIcon icon={faBars} style={{ fontSize: '2em', color: 'white' }}/>
        </Navbar.Toggle>      
        <Navbar.Collapse className="nav-drop" id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={`mobile-link ${isActive("/")}`}>Home</Nav.Link>
            <Nav.Link as={Link} to="/menu" className={`mobile-link ${isActive("/menu")}`}>Menu</Nav.Link>
            <Nav.Link as={Link} to="/about" className={`mobile-link ${isActive("/about")}`}>Tentang</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={`mobile-link ${isActive("/contact")}`}>Hubungi Kami</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}


export default NavigationBar
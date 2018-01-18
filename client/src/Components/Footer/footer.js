import React from "react";
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import './footer.css';

const Footer = () => (
    <footer className="footer navbar-fixed-bottom">
        {/* <div className="container-fluid info-text"> */}
            <div className="row company info-text">
                <p>©2018 PlantTheSeed LLC</p>
            </div>
        {/* </div> */}
    </footer>
);

export default
    Footer;
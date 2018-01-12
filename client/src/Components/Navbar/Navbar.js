import React from "react";
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import MainButtons from '../Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import './Navbar.css';
import LeafLogo from './images/leaf2.png'
const MyNavbar = () => (

	<Navbar className="header">
		<Navbar.Header >
			<Navbar.Brand >
				<div>
					<img responsive img border="2" alt="leaflogo" src= { LeafLogo } width="75" height="50">
					</img>
				</div>
			</Navbar.Brand>
		</Navbar.Header>
			<Nav pullRight>
				<NavItem eventKey={1} href="#">
				<button className="btn btn-large btn-sign-up ">SIGN UP</button>
				</NavItem>
				<NavItem eventKey={2} href="#">
				<button className="btn btn-large btn-sign-in">SIGN IN</button>
				</NavItem>
			</Nav>
	</Navbar>
);

export default MyNavbar;

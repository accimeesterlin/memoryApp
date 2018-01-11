import React from "react";
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import MainButtons from '../Button'
const MyNavbar = () => (

	<Navbar>
		<Navbar.Header className="header">
			<Navbar.Brand>
				<a href="#home" img border="0" alt="leaflogo" src="../../../public/images/2x/leaf2.png" width="50" height="50">
				</a>
			</Navbar.Brand>
			<MainButtons />
		</Navbar.Header>
	</Navbar>
);

export default MyNavbar;

import React from "react";
import './infoCard.scss';
import Modal from 'react-bootstrap/lib/Modal'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import { Col } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import Flower from './images/flower.png'


const infoCard = (props) =>  (
	

	<Form horizontal>
	<Col md={8} sm={12}>
		<FormGroup controlId="formHorizontalEmail">
			<Col componentClass={ControlLabel} sm={4}>
				Your Soil is : 
			</Col>
			<Col sm={8}>
				<h4 id="remind"><i>That guy that i met on the plane today.</i></h4>
			</Col>
		</FormGroup>
		
		<FormGroup controlId="formHorizontalEmail">			
		<Col componentClass={ControlLabel} sm={4}>
				Your Seed : 
			</Col>
			<Col sm={8}>
				<h4 id="remind"><i> {  props.time } </i></h4>
			</Col>
		</FormGroup>
		
		</Col>
		<Col md={4} sm={12}>
		<div className="plant-image">plant image here
			{ Flower }
			<img src="./images/flower.png"/>
		</div>
		
		</Col>

		<FormGroup>
			<Col sm={12}>
				
			</Col>
		</FormGroup>
	</Form>
);

export default infoCard;

// from one component to another,
// props


// 3types of components

// #1 Functional
	// const Header = (props) => {
	// 	// props.name
	// 	// props.age
	// }

	// <Header name = '' age = {5}/>

// #2 Class components
	// class App extends React.Component{
	// 	// this.props.name
	// 	// this.props.age
	// }
	// <App  name = "" age = {5}/>
// #3 Higher order components (advanced)
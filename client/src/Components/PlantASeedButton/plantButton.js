import React from "react";
import './plantButton.css';
import Modal from 'react-bootstrap/lib/Modal'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';


const formInstance = (
	<form>
		<FormGroup bsSize="large">
			<FormControl type="text" placeholder="Large text" />
		</FormGroup>
		<FormGroup>
			<FormControl type="text" placeholder="Normal text" />
		</FormGroup>
		<FormGroup bsSize="small">
			<FormControl type="text" placeholder="Small text" />
		</FormGroup>
	</form>
);
// render(formInstance);


class PlantButton extends React.Component {
	constructor(...args) {
		super(...args);

		this.handleHide = this.handleHide.bind(this);

		this.state = { show: false };
	}

	handleHide() {
		this.setState({ show: false });
	}
	render() {
		return (
			<div className="modal-container" style={{ height: 200 }}>
				<Button
					bsStyle="primary"
					bsSize="large"
					onClick={() => this.setState({ show: true })}
				>
					Get Started!
				</Button>

				<Modal
					show={this.state.show}
					onHide={this.handleHide}
					container={this}
					aria-labelledby="contained-modal-title"
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title">
							<h1>Let's Plant a Seed!</h1>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h3>Simply enter a bit of reference info
                        (the Soil) and the thing you want to
                        remember (the Seed)…
                        Then watch it grow.</h3>
                    {formInstance}
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleHide}>Plant it!</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}


export default PlantButton;

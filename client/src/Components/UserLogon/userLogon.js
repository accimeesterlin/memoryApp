import React from "react";
import './userLogon.scss';
import Modal from 'react-bootstrap/lib/Modal'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import PlantASeedButton from '../PlantASeedButton'

const userLogon = (
	<form>
		<FormGroup bsSize="large">
			<FormControl className="soil" name="soil" type="text" placeholder="User Name" />
		</FormGroup>
		<FormGroup bsSize="large">
			<FormControl className="seed" name="seed" type="password" placeholder="Password" />
		</FormGroup>
	</form>
);


class UserLogon extends React.Component {
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
			<div className="modal-container" style={{ height: 100 }}>
				<Button
					bsStyle="warning"
					bsSize="large"
					onClick={() => this.setState({ show: true })}
				>
					GET STARTED!
				</Button>

				<Modal
					show={this.state.show}
					onHide={this.handleHide}
					container={this}
					aria-labelledby="contained-modal-title"
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title">
							<h1>Sign Up or Sign In to start planting!</h1>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h3>Create an account by entering a user name and password. That's it!
							...or Sign in using your existing account info.
							Have fun!</h3>
						{userLogon}
					</Modal.Body>
					<Modal.Footer >
						{/* <Button class="plant-btn" onClick={this.handleHide}>Start Planting!</Button> */}
						<PlantASeedButton class="plant-btn" onClick={this.handleHide}>Start Planting!</PlantASeedButton>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}


export default UserLogon;

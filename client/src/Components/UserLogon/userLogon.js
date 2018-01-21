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
            <FormControl className="userName" name="name" type="text" placeholder="User Name" />
        </FormGroup>
        <FormGroup bsSize="large">
            <FormControl className="userPass" name="password" type="password" placeholder="Password" />
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
        this.setState({ show: false, show_button: true });
        // this.props.history("/dashboard");
    }



    render() {


        // CAN SET STATE INSIDE THE RENDER
        return (
            <div className="modal-container" style={{ height: 100 }}>
                <Button
                    className="get-started"
                    bsStyle="warning"
                    bsSize="large"
                    onClick={() => this.setState({ show: true })}
                >
                    Let's Get Started!
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            <h1>Are you ready to start planting!</h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>Simply create an account by entering a user name and password. That's it!
                            ...or Sign in using your existing account info.
                            Have fun!</h3>
                        {userLogon}
                    </Modal.Body>
                    <Modal.Footer >
                        {/* <Button class="plant-btn" onClick={this.handleHide}>Start Planting!</Button> */}

                        <Button
                            className="signin-btn"
                            bsStyle="warning"
                            bsSize="large"
                            onClick={this.handleHide}>Let's GO!</Button>

                    </Modal.Footer>

                </Modal>

                <div className={this.state.show_button ? "" : "dispear"}>
                    <PlantASeedButton show={this.state.show_button} />
                </div>
            </div>
        );
    }
}


export default UserLogon;



// Props


// Pass data from one to another components

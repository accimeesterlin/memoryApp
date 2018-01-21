import React from "react";
import './plantButton.scss';
import Modal from 'react-bootstrap/lib/Modal'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';


const formInstance = (
    <form>
        <FormGroup bsSize="large">
            <FormControl className="soil" type="text" placeholder="ex: Where you met, what purpose, which language, etc..." />
        </FormGroup>
        <FormGroup bsSize="large" >
            <FormControl className="seed" type="text" placeholder="ex: Name, number, etc. Make it short and understandable, you will be tested on this." />
        </FormGroup>
    </form>
);


class PlantButton extends React.Component {
    constructor(...args) {
        super(...args);

        this.handleHide = this.handleHide.bind(this);

        this.state = { show: false };
    }

    handleHide() {
        this.setState({ show: true });
    }



    componentWillReceiveProps(props){
        // CAN SET HERE
        console.log("Props Button: ", props);
        if(props.show === true){
            this.handleHide();
           
        } else{
            // TODO
            // undefined
        }
    }


    render() {

        console.log("State Modal: ", this.state)
        return (
            <div className="modal-container" style={{ height: 100 }}>
                <Button
                    bsStyle="warning"
                    bsSize="large"
                    onClick={() => this.setState({ show: true })}
                >
                    PLANT A SEED!
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
                    <Modal.Footer >
                        <Button
                        class="plant-btn"
                        bsStyle="warning"
                        bsSize="large"
                        onClick={this.handleHide}>Plant it!</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


export default PlantButton;
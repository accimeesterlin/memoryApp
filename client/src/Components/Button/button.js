import React from "react";
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';


const ActionButton = () => (

    <ButtonToolbar>
        {/* Indicates caution should be taken with this action */}
        <Button bsSize="large" >SIGN UP</Button>
        
    </ButtonToolbar>
);

export default ActionButton;

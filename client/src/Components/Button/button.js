import React from "react";
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';


const MainButtons = () => (

    <ButtonToolbar>
        {/* Indicates caution should be taken with this action */}
        <Button bsSize="medium" class="green-round">SIGN UP</Button>
        {/* Indicates a dangerous or potentially negative action */}
        <Button bsSize="medium" class="white-round">SIGN IN</Button>
    </ButtonToolbar>
);

export default MainButtons;

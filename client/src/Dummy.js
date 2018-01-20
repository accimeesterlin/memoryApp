import React, { Component } from 'react';
import PlantSeed from "./Components/PlantASeedButton/plantButton";

class Dummy extends Component {
    render() {

        console.log("Props: ", this.props);
        return (
            <div>
                <h1>I am the Dummy component</h1>

                <PlantSeed />
            </div>
        );
    }
}

export default Dummy;
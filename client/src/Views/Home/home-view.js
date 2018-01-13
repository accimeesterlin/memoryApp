import React from 'react';
import './home-view.scss';
import ActionButton from '../../Components/Button'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import Modal from 'react-bootstrap/lib/Modal'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import PlantButton from '../../Components/PlantASeedButton'

const isLoggedIn = false;

export default props =>
  <div>
    <Navbar isLoggedIn={isLoggedIn} />
    <div className='home section1'>
      <h1>
        Section1!
      </h1>
    </div>
    <div className="home section2">
      <h1>
        Section2!
      {/* button for planting a seed */}
        <PlantButton />
      </h1>

    </div>
    <div className="home section3">
      <h1>
        Section3!
  </h1>
    </div>
    <Footer />
  </div>

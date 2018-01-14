import React from 'react';
import './home-view.scss';
import ActionButton from '../../Components/Button'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import Modal from 'react-bootstrap/lib/Modal'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import PlantButton from '../../Components/PlantASeedButton';
import UserLogon from '../../Components/UserLogon';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import MainLogo from './images/logo.png'
import { Image } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';

//image for main logo
const imageResponsiveInstance = <Image src={MainLogo} responsive />;

//for button state change
const isLoggedIn = false;


export default props =>
  <div>
    <Navbar isLoggedIn={isLoggedIn} />
    <div className='home section1'>
      <Grid >
        <Row className="logo-row">
          <Col xs={1} md={1}>
          </Col>
          <Col className="logo" xs={10} md={10}>
            {imageResponsiveInstance}
          </Col>
          <Col xs={1} md={1}>
          </Col>
        </Row>
        <Row>
          <h4 >LEARN MORE</h4>
          <Glyphicon className="glyph" glyph="glyphicon glyphicon-menu-down" />
        </Row>
      </Grid>
    </div>
    <div className='home section2'>
      <Grid >
        <Row className="logo-row">
          <Col xs={12} md={6}>
          </Col>
          <Col className="logo" xs={12} md={6}>
            {imageResponsiveInstance}
          </Col>
        </Row>
        <Row>
          <h4 >LEARN MORE</h4>
          <Glyphicon className="glyph" glyph="glyphicon glyphicon-menu-down" />
        </Row>
      </Grid>
    </div>

    <div className='home section3'>
      <Grid >
        <Row className="logo-row">
          <Col xs={12} md={2}>
            {/* flower image */}
          </Col>
          <Col className="logo" xs={12} md={5}>
            {/* 1.2.3. steps */}
          </Col>
          <Col xs={12} md={5}>
            {/* lightbulb guy image */}
          </Col>
        </Row>
        <Row className="ground">
        <UserLogon />
<PlantButton />
        </Row>
      </Grid>
    <Footer />
    </div>
    </div>
    


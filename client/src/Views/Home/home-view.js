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
import RedDress from './images/NewRedDressCrop.png'
import LightBulb from './images/LightBulbCrop.png'

//image for main logo
const imageResponsiveInstance = <Image src={MainLogo} responsive />;
const RedDressResponsive = <Image src={RedDress} responsive />;
const LightBulbResponsive = <Image src={LightBulb} responsive />;

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
          <h4>LEARN MORE</h4>
          <Glyphicon className="glyph" glyph="glyphicon glyphicon-menu-down" />
        </Row>
      </Grid>
    </div>
    <div className='home section2'>
      <Grid >
        <Row className="logo-row">
          <Col xs={12} md={6}>
            {RedDressResponsive}
          </Col>
          <Col className="logo" xs={12} md={6}>
            <ul className="questions">
              <li>Are you often unable to remember
an important fact or figure?</li>
              <li>Do you forget people’s names at
the worst moments?</li>
              <li>Are you ever asked a question,
and you should know the answer,
but you struggle to form an
intelligent reply?</li>

            </ul>
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
            {LightBulbResponsive}
            {/* lightbulb guy image */}
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={2}>
          </Col>
            <Col xs={12} md={8}>
              <UserLogon />
              <PlantButton />
            </Col>
              <Col xs={12} md={2}>
              </Col>
          </Row>
         
          
              {/* <Row className="ground">
              </Row> */}
            <Footer />
      </Grid>
    </div>
    </div>



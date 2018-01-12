import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Organization from './Organization'
import MainButtons from '../Components/Button'
import MyNavbar from '../Components/Navbar'

import './app.scss'
export default props =>
<BrowserRouter>
  <div className="navbar">
    <MyNavbar />
   
    {/* <ul>
      <button><Link to="/">Home</Link></button>
      <button><Link to="/organization">Organizations</Link></button>
    </ul>

    <hr/> */}

    <Route exact path="/" component={Home}/>
    <Route path="/organization" component={Organization}/>
  </div>
</BrowserRouter>



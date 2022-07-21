import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

import '../css/NavBar_Footer.css';

import logo from '../images/logo.jpeg';

export default function App() {
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  return (
    <>
    <MDBNavbar expand='lg' className="py-5">
      <MDBContainer fluid>
        <div className="d-lg-none">
      <img
              src={logo}
              height='50'
              alt='Logo'

            />
        </div>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavColorThird(!showNavColorThird)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse show={showNavColorThird} navbar>
          <MDBNavbarNav className='d-flex justify-content-around align-items-center'>
            <MDBNavbarItem>
            <Link className="nav-item" to="/">Home</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <Link className="nav-item" to="/about">About</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <Link to="/" className='d-none d-lg-block'><img
              src={logo}
              height='65'
              alt='Logo'
            /></Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <Link className="nav-item" to="/therapeutic-space">Therapetic Space</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className="nav-item" to="/contact">Contact</Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </>
  );
}
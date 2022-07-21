import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
} from 'mdb-react-ui-kit';
import '../css/NavBar_Footer.css';

export default function App() {
  return (
    <MDBFooter className='shadow-3-strong'>
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4 pe-5">
            <h5 className='text-uppercase py-3'>Wicklow Play & Creative Arts Therapy</h5>
            <p>WPCAT works with both adults and children on a one-to-one basis. We work therapeutically from a Rogerian, Jungian and Existential perspective. We believe that each person has the tools within themselves to heal.
            </p>
            </MDBCol>
<MDBCol lg="2" md="6" className="mb4">
            <h5 className='text-uppercase'>Useful Links</h5>
            <ul className='list-unstyled'>
              <li className='px-2 my-2'>
              <Link className="footer-link" to="/about">About</Link>
              </li>
              <li className='px-2 my-2'>
              <Link className="footer-link" to="/services">Services</Link>
              </li>
              <li className='px-2 my-2'>
              <Link className="footer-link" to="/faq">FAQ</Link>
              </li>
              <li className='px-2 my-2'>
              <Link className="footer-link" to="/contact">Contact</Link>
              </li>
              <li className='px-2 my-2'>
              <Link className="footer-link" to="/booking">Book a Session</Link>
              </li>
            </ul>
            </MDBCol>
<MDBCol md="6" lg="4" className="mb-4">
            <h5 className='text-uppercase mb-0'>Contact</h5>

            <ul className='list-unstyled'>
              <li>
              <p className='footer-text'>
                <MDBIcon className='px-2 py-2' icon="home" />Rathdrum, Co. Wickow, A67 EK51
                </p>
              </li>
              <li>
                <p className='footer-text'>
                <MDBIcon className='px-2 py-2'  icon="envelope" />wicklowcreativeartstherapy@gmail.com
                </p>
              </li>
              <li>
              <p className='footer-text'>
                <MDBIcon className='px-2 py-2'  icon="phone" />+353872981642
                </p>
              </li>
              <li>
              <p className='footer-text'>
                <MDBIcon className='px-2 py-2'  fab icon="instagram" />@wicklowcreativeartstherapy
                </p>
              </li>
            </ul>
            </MDBCol>
        </MDBRow>
        </MDBContainer>
    </MDBFooter>
  );
}
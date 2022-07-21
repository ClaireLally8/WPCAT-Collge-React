import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBIcon } from 'mdb-react-ui-kit';

import ContactForm from '../components/ContactForm';


function Contact() 
{
 return (
    <>
    <MDBContainer fluid className="my-5">
        <MDBRow>
            <MDBCol sm="11" md="11" lg="5" className="p-4 mx-4 background-color">
            <h2 className="py-3 text-center">Want to get in touch?</h2>
            <p className="ps-2 pt-3 pb-2"><MDBIcon icon="home" className="px-3" />Rathdrum, Co. Wickow, A67 EK51</p>
            <p className="p-2"><MDBIcon icon="envelope" className="px-3" />wicklowcreativeartstherapy@gmail.com</p>
            <p className="p-2"><MDBIcon icon="phone" className="px-3" />+353872981642</p>
            <p className="p-2"><MDBIcon fab icon="instagram" className="px-3"/><a className="contact-link" href="https://www.instagram.com/wicklowcreativeartstherapy/?hl=en">@wicklowcreativeartstherapy</a></p>
            </MDBCol>
            <MDBCol sm="12" md="12" lg="6" className="p-3">
                <ContactForm />
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    <MDBContainer fluid>
        <MDBRow>
            <MDBCol sm="11" md="11" lg="10" className="offset-lg-1 p-5 my-5">
            <iframe src="https://maps.google.com/maps?q=Rathdrum,%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" height="500" width="100%">
                </iframe>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
</>
 );
}

export default Contact;


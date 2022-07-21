import React, { useState } from 'react';
import {
    MDBInput,
    MDBRadio,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
 
 function Booking() 
 {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(''); 
    const [address, setAddress] = useState(''); 
    const createBookingRequest = (e) =>
    {
        e.preventDefault(); 
        if (name && email && phone && address)
        {
            console.log({name, email, phone, address});
        }
    }
  return (
    <>
    <MDBContainer fluid className="mt-5">
        <h2 className="my-5">Submit a Booking Request</h2>
    <form onSubmit={createBookingRequest}>
        <MDBRow>   
        <MDBCol lg="4" md="5" sm="12" className="offset-lg-1 offset-md-1">
        <h6 className="mb-2">Your Details</h6>
        <MDBInput className='mb-3' type='text' label='Full Name' onChange={ (e) => setName(e.target.value)} required />
        <MDBInput className='mb-3' type='email' label='Email address' onChange={ (e) => setEmail(e.target.value)} required />
        <MDBInput className='mb-3' type='phone' label='Phone Number' onChange={ (e) => setPhone(e.target.value)} required />
        <MDBInput wrapperClass="mb-3" name="address" textarea rows={4} label='Full Address' onChange={ (e) => setAddress(e.target.value)} required />
        </MDBCol>
        <MDBCol lg="4" md="5" sm="10" className="offset-lg-1 offset-md-1">
        <h6 className="mb-2">Session Details</h6>
        <MDBRadio name='sessionType' label='Face to Face Session' />
        <MDBRadio name='sessionType' label='Phone/Video Session' />
        <MDBRadio name='sessionType' label='Environmental Arts Session' />
        <MDBInput className='my-4' type='date' label='Preferred Date'  />
        <MDBInput className='my-4' type='time' label='Preferred Time'  />
        </MDBCol>
        </MDBRow>
        <MDBRow className=" my-5 d-flex justify-content-end">
            <MDBCol sm="12" md="4" lg="4">
            <MDBBtn>Submit Booking Request</MDBBtn>
            <h6 className="py-4">Please Note; this booking is not a final time. <br /> We will do our best to facilitate a booking <br />at a time closest to your preferred date & time. </h6>
            </MDBCol>
            
        </MDBRow>
    </form>

    </MDBContainer>
</>
   );
 }
 
export default Booking;

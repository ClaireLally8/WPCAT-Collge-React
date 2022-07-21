import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBCardLink } from 'mdb-react-ui-kit';
import React from 'react'

import '../css/ServiceCards.css'
export default function ServicesCards() {
    const InfoArr = [
        {
            Name: 'Face to Face',
            AgeGroup: 'Adults & Children',
            Description: 'These sesssions take place in our main space, in Rathdrum, or in our second location, in Rathfarnham. The Face-to-Face sessions last 60 minutes with the central focus being on you.',
            Price:'60'
        },
        {
            Name: 'Phone/Video Sessions',
            AgeGroup: 'Adults Only',
            Description: 'These sesssions take place in a location where you feel most comfortable, at home and take place over the phone or a skype call. These sessions last 60 minutes with the central focus being on you.',
            Price:'60'
        },
        {
            Name: 'Environmental Arts Therapy Sessions',
            AgeGroup: 'Adults Only',
            Description: 'These sesssions take place outdoors, in our main space in Rathdrum. The focus with these sessions is on connecting with nature and using nature as a medium to work through your own personal difficulties.',
            Price:'60'
        }
    ];
    let InfoItem = InfoArr.map((item) => 
    {
    return(

<MDBCard className="px-4 mx-3" style={{ width: '18rem' }}>
      <MDBCardBody>
        <MDBCardTitle className="py-2">{item.Name}</MDBCardTitle>
        <MDBCardSubTitle className="py-2">{item.AgeGroup}</MDBCardSubTitle>
        <MDBCardText className="py-2">{item.Description}</MDBCardText>
        <MDBCardText className="py-2">€ {item.Price}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
    );
    })

  return (
    <>
     <div className="row d-flex justify-content-center">
        {InfoItem}
    </div>
    </>
  );
}
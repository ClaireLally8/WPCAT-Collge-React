import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import Cards from '../components/ServicesCards'

import TherapyShed from '../images/therapy_shed.jpeg'
function Services() 
{
 return (
    <>
    <MDBContainer fluid className="my-5">
        <MDBRow className="p-5">
            <MDBCol size="4" className="offset-2"> 
                <img className="img-fluid" src={TherapyShed} />
            </MDBCol>
            <MDBCol size="4"className="px-4 d-flex align-items-center">
                <p>In Wicklow Play & Creative Arts Therapy, we work with both adults & children on a one to one basis.</p>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    <MDBContainer className="my-5">
        <MDBRow>
            <MDBCol>
                <Cards />
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    </>
    
 );
}

export default Services;
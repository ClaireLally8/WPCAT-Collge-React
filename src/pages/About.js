import {
   MDBTabs,
   MDBTabsItem,
   MDBTabsLink,
   MDBTabsContent,
   MDBTabsPane,
 } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import ArtsAbout from '../components/ArtsAbout';
import StaffAbout from '../components/StaffAbout';

function About() 
{
   const [basicActive, setBasicActive] = useState('tab1');

   const handleBasicClick = (value: string) => {
     if (value === basicActive) {
       return;
     }
 
     setBasicActive(value);
   };
 return (
    <>
      <MDBTabs className='m-3 d-flex justify-content-center'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            About Our Staff
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            About the Creative Arts
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}><StaffAbout /></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}><ArtsAbout /></MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}

export default About;
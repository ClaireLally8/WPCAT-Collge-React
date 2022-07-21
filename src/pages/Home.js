import { MDBContainer } from 'mdb-react-ui-kit';
import React from 'react';

import ImageStack from '../components/ImageStack'
import InfoCards from '../components/InfoCards'

import PaintedRock from '../images/painted_rock.jpeg'

import '../css/home.css';

function Home() 
{
 return (
    <>
        <div className="hero-outer">
    <div className="hero-image">
    </div>
    <div id="cover-text">
       <h1 className="text-center overlay-text">Wicklow Play <br /> & Creative Arts <br /> Therapy</h1>
    </div>
    </div>
    <MDBContainer>
        <ImageStack />
    </MDBContainer>
    <MDBContainer fluid className="overlay p-5">
        <InfoCards />
    </MDBContainer>
    <MDBContainer className="my-5">
  <div className="row background-color px-5 py-4">
    <div className="col-sm-12 col-md-6 col-lg-6"><p>For any therapy to be successful a client needs to feel safe. This therapy room was created beside a woodland to enable clients to benefit from nature’s healing qualities and the sense of calm it creates.</p><p>Our therapy room has large windows overlooking woodland and while inside you have a strong sense of being amongst trees.</p><p>Recent research has shown there are direct and indirect benefits on both physiological and psychological health by being exposed to “green” environments . The term ‘dose of nature’ is now being used to describe time spent in natural environments.</p>
      <a  className="dark-url" href="space.html">Check out our Space</a>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
      <img alt="painted rock" className="img-fluid" src= {PaintedRock} />
    </div>
  </div>
    </MDBContainer>
    </>
 );
}

export default Home;
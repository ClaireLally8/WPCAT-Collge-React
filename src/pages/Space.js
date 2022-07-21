import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import React from 'react';

import OutdoorFire from '../images/outdoor-fire.jpeg'
import Tree from '../images/tree.jpeg'
import Hole from '../images/hole.jpeg'
import RoomView from '../images/room_view.jpeg'
import Candle from '../images/candle-stone.jpeg'
import ClayPot from '../images/clay-pot.jpeg'
import FigurineWall from '../images/figurine_wall.jpeg'
import TherapyShed from '../images/therapy_shed.jpeg'
import SeatedArea from '../images/seated_area.jpeg'

function Space() 
{
 return (
   <MDBContainer className="my-5">
    <MDBRow className="px-3">
        <MDBCol sm="12" md="8" lg="8" className="offset-lg-2 offset-md-2 offset-sm-0">
            <img alt="fire" className="img-fluid" src={OutdoorFire} />
        </MDBCol>
    </MDBRow>
    <MDBRow className="ps-3 my-3">
        <MDBCol sm="12" md="4" lg="4" className="offset-lg-2 offset-md-2 pe-3 pb-3">
        <img className="img-fluid" src={Tree} />
        </MDBCol>
        <MDBCol sm="12" md="4" lg="4" className="pe-3">
        <img className="img-fluid" src={Hole} />
        </MDBCol>
    </MDBRow>
    <MDBRow className = "mb-3">
        <MDBCol sm="8" md="6" lg="5" className="offset-lg-2 offset-md-2 px-3">
        <img alt="room view" className="img-fluid" src={RoomView} />
        </MDBCol>
        <MDBCol sm="8" md="2" lg="3" className="px-3">
        <img alt="candle & stone" className="img-fluid pb-3" src={Candle} />
        <img alt="clay pot" className="pt-3 img-fluid" src={ClayPot} />
        </MDBCol>
    </MDBRow>
    <MDBRow className="mb-3 px-3">
        <MDBCol sm="12" md="8" lg="8" className="offset-lg-2 offset-md-2 offset-sm-0">
        <img alt="figurine wall" className="img-fluid" src={FigurineWall} />
        </MDBCol>
    </MDBRow>
    <MDBRow className="mb-3">
        <MDBCol sm="12" md="4" lg="4" className="offset-lg-2 offset-md-2 pb-3 px-3">
        <img alt="therapy shed" className="img-fluid" src={TherapyShed} />
        </MDBCol>
        <MDBCol sm="12" md="4" lg="4" className="pb-3 px-3">
        <img alt="seated area" className="img-fluid" src={SeatedArea} />
        </MDBCol>
    </MDBRow>
    <MDBRow>
    <MDBCol sm="12" md="8" lg="8" className="offset-lg-2 offset-md-2 offset-sm-0">
    <iframe src="https://www.youtube.com/embed/KWOgSQ4mRlE" title="Rathdrum Via Drone" height="500" width="100%" frameBorder="0" allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </MDBCol>
    </MDBRow>
   </MDBContainer>
 );
}

export default Space;
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption
} from 'mdb-react-ui-kit';

export default function TestimonialCarousel() {
  return (
    <MDBCarousel showControls showIndicators>
    <MDBCarouselInner>
      <MDBCarouselItem className='active'>
        <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/041.webp' alt='...' />
        <MDBCarouselCaption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarouselInner>
  </MDBCarousel>
  );
}
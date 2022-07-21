import React, { Component } from 'react'

import Woodland from '../images/woodland.jpeg'

export default class ImageStack extends Component {
  render() {
    return (
  <div className="image-stack my-5">
  <div className="image-stack-bottom">
    <img 
      alt="woodland" 
      src = {Woodland}  
      className="img-fluid image-bottom d-none d-md-block" />
  </div>
  <div className="stack-top background-color p-5">
    <p>WPCAT works with both adults and children on a one-to-one basis. We work therapeutically from a Rogerian, Jungian and Existential perspective. We believe that each person has the tools within themselves to heal.</p>
    <p>We adhere to the core conditions of being present, empathic, non-judgemental and congruent, whilst also incorporating a wide range of Creative Arts and Nature in my work with clients.</p>
    <a className="dark-url" href="services.html">View our Services</a>
  </div>
</div>
    );
  }
}

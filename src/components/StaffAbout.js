import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit';

export default function StaffAbout() {
    const StaffArr= [
        {
           Name: "Jasmine B",
           About: "Jasmine B. Play Therapist with expeirence in children adn adult therapy.  Jasmine’s practice is rooted in curating integrative wellness opportunities for people to pause and center their breath, to more intimately connect with themselves and community.",
           ImageLink:"https://i.ibb.co/nfjsT6Z/Jasmine-B.jpg",
           Img_Classes:"background-color-light col-sm-12 col-md-6 col-lg-4 offset-lg-2 order-first",
           Desc_Classes:"background-color-light d-flex align-items-center px-5 col-sm-12 col-md-6 col-lg-4 order-last"
  
        },
        {
           Name: "Rachel",
           About:"Rachel specializes in grief and trauma and is a trained EMDR therapist. Rachel’s overall counseling objective is to be present with the client in session as they build resiliency, experience healing, and acquire skills that can make the next chapter of their life meaningful.",
           ImageLink:"https://i.ibb.co/SdTm5rQ/Rachel.jpg",
           Img_Classes:"background-color-light col-sm-12 col-md-6 col-lg-4 order-last",
           Desc_Classes:"background-color-light d-flex align-items-center px-5 col-sm-12 col-md-6 col-lg-4 order-first"
  
        },
        {
           Name:"Mina B",
           About:"Minaa B. is a licensed therapist turned wellness coach and leads workshops and trainings with organizations to build psychological safety. Minaa is a huge advocate for community-care and believes in the power of building relationships and cultivating a space of belonging.",
           ImageLink:"https://i.ibb.co/58cFDCz/Mina-B.jpg",
           Img_Classes:"background-color-light col-sm-12 col-md-6 col-lg-4 offset-lg-2 order-first",
           Desc_Classes:"background-color-light d-flex align-items-center px-5 col-sm-12 col-md-6 col-lg-4 order-last"
  
        }
     ]
     let AboutItem = StaffArr.map((item) => 
     {
     return(
        <div className="row my-5">
        <div className={item.Img_Classes}>
            <img alt={item.Name} className="img-fluid" src={item.ImageLink} />
        </div>
        <div className={item.Desc_Classes}>
            <p>{item.About}</p>
        </div>
        
    </div>
     );
     })
  
   return (
     <>
     <MDBContainer className="my-3">
     {AboutItem}
     </MDBContainer>

      </>
   );

}
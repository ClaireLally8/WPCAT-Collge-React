import { MDBIcon } from 'mdbreact';
import React from 'react'

export default function InfoCards() {
    const InfoArr = [
        {
            Icon: 'puzzle-piece',
            Therapy: 'Play Therapy',
            Description: 'Just as adults may ‘talk out’ difficult issues Play Therapy provides a child with the space to "play out" their thoughts and feelings.'
        },
        {
            Icon: 'palette',
            Therapy: 'CREATIVE ARTS THERAPY',
            Description: 'The creative arts allow for the expression of inner experiences that are beyond words. Our external narrative is often the starting point of a story – what happened, when and how.'
        },
        {
            Icon: 'tree',
            Therapy: 'ENVIRONMENTAL ARTS THERAPY',
            Description: 'Environmental Art Therapy is when we bring our therapy sessions out into nature. Nature has a way of giving us what we need at any given time.'
        }
    ];
    let InfoItem = InfoArr.map((item) => 
    {
    return(
    <div className="col-sm-12 col-md-4 col-lg-3 p-5 card">
        <MDBIcon fas icon={item.Icon} size='3x' className="text-center"/>
        <h4 className='mt-5 pb-3'>{item.Therapy}</h4>
        <p>{item.Description}</p>
    </div>
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
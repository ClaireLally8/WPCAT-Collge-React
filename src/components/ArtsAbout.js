import { MDBContainer } from 'mdb-react-ui-kit';
import React from 'react'

export default function ArtsAbout() {
    const ArtArr= [
        {
           Art: "Sandplay",
           Desc: "Sandplay gives an adult or child the opportunity to portray rather than verbalise, feelings and experiences often inaccessible or difficult to express in words. Within the sandplay experience, inner conflicts and traumas may emerge and are worked through non- verbally in the images that appear in the tray of sand. As the inner struggles begin the process of resolution, the sandplayer is freed to resume his/her normal, healthy patterns of growth and development.",
           ImageLink:"https://i.ibb.co/rQwLLQ0/sand.jpg",
           Img_Classes:"col-sm-12 col-md-6 col-lg-4 offset-lg-1 px-3 d-flex align-items-center order-last",
           Desc_Classes:"col-sm-12 col-md-6 col-lg-4 offset-lg-1 d-flex align-items-center order-first",
           Row_Class:"row py-5"
  
        },
        {
           Name: "Music",
           Desc:"Music plays an important role in our everyday lives. It can be joyful or sad, exciting or calming, can stir memories and powerfully resonate with our feelings, helping us to express them and to better communicate these feelings to others. Music can also prove helpful when emotions are too confusing to express verbally or when words are too much or just not enough.",
           ImageLink:"https://i.ibb.co/qp3TnB6/music.jpg",
           Img_Classes:"d-flex align-items-center col-sm-12 col-md-6 col-lg-4 offset-lg-1 px-3 order-first",
           Desc_Classes:"col-sm-12 col-md-6 col-lg-4 offset-lg-1 d-flex align-items-center order-last",
           Row_Class:"row p-5 background-color-light"
  
        },
        {
           Name:"Dance & Movement",
           Desc:"Dance and movement are used in therapy to promote self-awareness, self-esteem and a safe space for the expression of feelings. Like all creative mediums, dance and movement can express aspects of our personality. When used in a creative and therapeutic way dance and movement helps individuals to achieve emotional. cognitive, physical, social and spiritual integration. It has been found to be beneficial in the reduction of stress, mood management and disease prevention. The physical component of this medium offers increased muscular strength, coordination, mobility and decreased muscular tension.",
           ImageLink:"https://i.ibb.co/zX6pqJF/dance-movement.jpg",
           Img_Classes:"d-flex align-items-center col-sm-12 col-md-6 col-lg-4 offset-lg-1 px-3 order-last",
           Desc_Classes:"col-sm-12 col-md-6 col-lg-4 offset-lg-1 d-flex align-items-center order-first",
           Row_Class:"row py-5"
  
        },
        {
            Name: "Art",
            Desc:"Malchiodi (2006) provides a description of what art therapy involves - the focus is on our inner experience. Different from art classes where you may be asked to draw from your imagination, in a therapeutic session, our inner world of images, feelings, thoughts and ideas are always of primary importance to the experience",
            ImageLink:"https://i.ibb.co/N24gb9v/art.jpg",
            Img_Classes:"d-flex align-items-center col-sm-12 col-md-6 col-lg-4 offset-lg-1 px-3 order-first",
            Desc_Classes:"col-sm-12 col-md-6 col-lg-4 offset-lg-1 d-flex align-items-center order-last",
            Row_Class:"row p-5 background-color-light"
   
         },
         {
            Name:"Clay",
            Desc:"For Creative Arts Therapists clay is an essential element of the toolkit. It is a medium that helps facilitate the processing of experiences and emotions.Clay-work involves a very primal mode of expression and communication. Touch in clay work also requires body movements and endless opportunities for touching and modelling. Thus clay-work makes possible an entire non-verbal communication for the creator.",
            ImageLink:"https://i.ibb.co/TtSjR6P/clay.jpg",
            Img_Classes:"d-flex align-items-center col-sm-12 col-md-6 col-lg-4 offset-lg-1 px-3 order-last",
            Desc_Classes:"col-sm-12 col-md-6 col-lg-4 offset-lg-1 d-flex align-items-center order-first",
            Row_Class:"row py-5 mb-5"
   
         },
     ]
     let ArtsItem = ArtArr.map((item) => 
     {
     return(
        <div className={item.Row_Class}>
        <div className={item.Desc_Classes}>
            <p>{item.Desc}</p>
        </div>
        <div className={item.Img_Classes}>
         <img alt={item.Name} class="img-fluid" src={item.ImageLink} />
        </div>
    </div>
     );
     })
  
   return (
     <>
     <MDBContainer fluid>
      {ArtsItem}
     </MDBContainer>

      </>
   );

}
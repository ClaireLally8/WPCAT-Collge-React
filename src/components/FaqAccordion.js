import { MDBAccordion, MDBAccordionItem, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import React from 'react'

import '../css/accordion.css'
export default function FaqAccordion() {
    const faq = [{
        Question: "What is Environmental Art Therapy?",
        Answer: "Environmental Art Therapy is when we bring our therapy sessions out into nature. Nature has a way of giving us what we need at any given time. Being out in its wildness and its absolute beauty reminds us of how insignificant we are in the greater scheme of things and what seems like an insurmountable obstacle is actually manageable if seen from another perspective. RW Kimmerer (2013) describes how trees are teachers of healing. Despite all the damage we inflict on mother nature she does not turn her back on us but instead is constantly there for us. Elements in nature understand their interconnectedness. Life of one is dependent on the life of all. As a culture we have moved so far from what is natural and we are hurting as a result. Nature also lends itself to ritual and in its rhythms (the seasons, the tides, the winds etc) and seasonal changes we are reminded of our own losses and subsequent growth or decay. Fires can be lit, altars created, dens built, we can just walk and reflect on our loss. Having a witness, makes the sense of ritual more profound. Rituals and their embodied experience enable people to make meaning from their loss and to honour it. There is healing in that sense of ‘doing something’. Rituals allow for the processing of difficult feelings in a way that is safely contained. ‘There must be some among us with whom we can sit down and weep and still be counted as warriors’ Adrienne Rich"
      },
        {
        Question: "What is Play Therapy?",
        Answer: "The aim of play therapy is to create a trusting, empathic space in which the young person can feel safe to express their feelings and emotions freely. It helps them learn it is OK to feel and teaches them how to cope with feelings in a safe and constructive way. The play therapist works with the young person through the mediums of Sand, Art, Music, Movement, Puppets, Therapeutic Stories and Drama. Play therapy allows children to change the way they think about, feel toward, and resolve their concerns (Kaugars & Russ, 2001). Even the most troubling problems can be confronted in play therapy and lasting resolutions can be discovered, rehearsed, mastered and adapted into lifelong strategies (Russ, 2004)."
      },
      {
        Question: "What is a Play Therapist?",
        Answer: "A Play Therapist has a post grad qualification in play therapy. He/she provides a free atmosphere within safe boundaries that allows the young person complete freedom to express him or herself verbally or physically using whatever medium he/she decides. The therapist accepts the young person as he/she is in a non-judgmental way. The therapist reflects a young person’s feelings back in such a way that he/she can get an insight into his/her behaviour. The therapist recognises and respects the young person’s own ability to solve his/her problems and gives him/her the opportunity to do so. The young person leads and the therapist follows. It is a gradual process. Limitations are set to make the young person aware of his/her responsibilities in the therapeutic relationship and to ensure the safety of the young person and the therapist"
      },
      {
        Question: "Why do young people need to attend for Play Therapy sessions?",
        Answer: "If parents, teachers feel that the young person is having difficulty in an area of their life and would benefit from some time to explore their feelings and emotions."
      },
      {
        Question: "For how long will my child need therapy?",
        Answer: "Each child takes their own time to feel safe enough within the therapy room to start to process their emotions and to explore their inner world. It can take up to 6 – 8 sessions for a child to feel safe. Research suggests that on average a child needs between 12 and 20 sessions of play therapy to resolve the issues they may have, however, this can increase or decrease depending on the child and the severity of the issues. After every 8 sessions I meet with the parents/guardians for an update and they have the opportunity to discuss their concerns and get support and guidance from me. Everything that happens within the play room is confidential and the actual sessions will not be discussed but feedback is given to parents on how their child is settling into and using the therapeutic space. Parental feedback will also be requested on any changes noted in their child’s behaviour.  The child will be advised by me that everything that happens within the playroom is just between us. They can talk about it if they want to but I will not discuss the details of our sessions unless they tell me that they or someone else they know has been harmed. Then I will make a plan with the child to tell someone what has happened, to ensure they and the people they care about are safe."
      },
      {
        Question: "What to say?",
        Answer: "When the young person asks why they are to attend play therapy sessions  - give them a truthful answer e.g.  ‘you seem to be having difficulties with ….. and we feel play therapy might help you with these issues’."
      }]
    let InfoItem = faq.map((item) => 
    {
    return(
        <MDBRow>
    <MDBCol size="10" className="offset-1 my-3">
        <MDBAccordion flush initialActive={0}>
        <MDBAccordionItem collapseId={1} headerTitle={item.Question}>{item.Answer}</MDBAccordionItem>
        </MDBAccordion>
        </MDBCol>
        </MDBRow>
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
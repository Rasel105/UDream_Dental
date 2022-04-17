import React from 'react';
import { Button, Card } from 'react-bootstrap';
import personalPhoto from '../../images/Personal/Rasel.jpg'
const About = () => {
     return (
          <div className='d-flex justify-content-center align-items-center my-5'>
               <Card style={{ width: '25rem' }}>
                    <img src={personalPhoto} alt="" />
                    <Card.Body>
                         <Card.Title>Md. Azaddul Islam Rasel</Card.Title>
                         <Card.Text>
                              Some quick example text to build on the card title and make up the bulk of
                              the card's content.
                         </Card.Text>
                    </Card.Body>
               </Card>
          </div>
     );
};

export default About;
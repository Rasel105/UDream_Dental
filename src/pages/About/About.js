import React from 'react';
import { Button, Card } from 'react-bootstrap';
import personalPhoto from '../../images/Personal/Rasel.jpg'
const About = () => {
     return (
          <div>
               <h2 className='text-center text-info mt-2'>About Myself</h2>
               <div className='d-flex justify-content-center align-items-center mt-4 mb-5 '>
                    <Card className='rounded' style={{ width: '20rem' }}>
                         <img className='rounded' src={personalPhoto} alt="" />
                         <Card.Body>
                              <Card.Title className='text-center mb-3'>Md. Azaddul Islam Rasel</Card.Title>
                              <Card.Text>
                                   The profession of software engineers is really cool and full of challenges, the aim to build or develop the applications is like the challenges that every software developer faced during his/her field.

                                   Increasing my performance metrics are concerned with how efficient you are at work. It has to do with ensuring customer satisfaction, delivering projects within deadlines and helping companies reduce costs. It basically helps you build up your reputation in the workplace and makes it that much easier for you to achieve long-term goals like promotions.

                              </Card.Text>
                         </Card.Body>
                    </Card>
               </div>
          </div>
     );
};

export default About;
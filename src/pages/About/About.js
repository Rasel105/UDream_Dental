import React from 'react';
import { Card } from 'react-bootstrap';
import personalPhoto from '../../images/Personal/Rasel.jpg'
import './About.css'

const About = () => {
     return (
          <div>
               <h2 className='text-center text-info mt-2'>About Myself</h2>
               <div className='d-flex justify-content-center align-items-center mt-4 mb-5 '>
                    <Card className='rounded outercss' style={{ width: '25rem' }}>
                         <img className='rounded' src={personalPhoto} alt="" />
                         <Card.Body>
                              <Card.Title className='text-center mb-3 text-info' style={{ fontSize: "20px" }}>Md. Azaddul Islam Rasel</Card.Title>
                              <Card.Text>
                                   <span className='text-primary display-4'>Goal:</span>
                                   The profession of software engineers is really cool and full of challenges, the aim to build or develop the applications is like the challenges that every software developer faced during his/her field.

                                   Increasing my performance metrics are concerned with how efficient you are at work.

                              </Card.Text>
                         </Card.Body>
                    </Card>
               </div>
          </div>
     );
};

export default About;
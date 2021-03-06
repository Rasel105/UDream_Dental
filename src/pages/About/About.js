import React from 'react';
import { Card } from 'react-bootstrap';
import personalPhoto from '../../images/Personal/Rasel.jpg'
import './About.css'

const About = () => {
     return (
          <div>
               <h2 className='text-center text-info mt-2'>About Myself</h2>
               <div className='d-flex justify-content-center align-items-center mt-4 mb-5 '>
                    <Card className='rounded outercss' style={{ width: '22rem' }}>
                         <img className='rounded' src={personalPhoto} alt="" />
                         <Card.Body>
                              <Card.Title className='mb-3' style={{ fontSize: "20px" }}>
                                   <h3><span className='text-primary'>Hello,</span> I'm </h3>
                                   <p className='text-info'>Md. Azaddul Islam Rasel</p>
                              </Card.Title>
                              <Card.Text>
                                   <span className='text-primary display-4'>Goal:</span>
                                   The profession of software engineers is really cool and full of challenges, I'm a Diploma Engineer, I have completed Diploma Enineering in 2019, my goal is to be a Software Developer. to full fill my Dream also Goal I'm working on it. That's why I have admited Programming Hero Course. to achieve my goal i'm doin a lot of hard work. Insha Allah, my Goal come to me within a very short time.
                              </Card.Text>
                         </Card.Body>
                    </Card>
               </div>
          </div>
     );
};

export default About;
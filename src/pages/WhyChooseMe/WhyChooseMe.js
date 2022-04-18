import React from 'react';
import { Card } from 'react-bootstrap';

const WhyChooseMe = () => {
     return (
          <div className='container mb-5'>
               <h2 className='text-center my-5'>Why Choose Me</h2>
               <div className='d-flex justify-content-center row gap-3 mx-auto'>
                    <Card className='col-md-4 col-sm-12' style={{ width: '22rem' }}>
                         <Card.Img variant="top" />
                         <Card.Body>
                              <Card.Title className='text-info text-center fs-2'>24 / 7 Emergency</Card.Title>
                              <Card.Text>
                                   Park Avenue Dental offers 24/7 emergency care to get your smile back on track. If you have any questions, please always feel free to reach out to us!
                              </Card.Text>
                         </Card.Body>
                    </Card>
                    <Card className='col-md-4 col-sm-12' style={{ width: '22rem' }}>
                         <Card.Img variant="top" />
                         <Card.Body>
                              <Card.Title className='text-info text-center fs-2'>15 year of Exprience</Card.Title>
                              <Card.Text>
                                   I know how important it is to find the right dentist for your family. I also realize that hearing from other patients just like you is an essential part of learning more about my services.
                              </Card.Text>
                         </Card.Body>
                    </Card>
                    <Card className='col-md-4 col-sm-12' style={{ width: '22rem' }}>
                         <Card.Img variant="top" />
                         <Card.Body>
                              <Card.Title className='text-info text-center fs-2'>
                                   Flexible Payment</Card.Title>
                              <Card.Text>
                                   I recognize that not everyone has dental insurance. I am proud to offer my patients flexible financing and payment options, so that you can get the treatment you need at a price suitable for you.
                              </Card.Text>
                         </Card.Body>
                    </Card>
               </div>
          </div>
     );
};

export default WhyChooseMe;
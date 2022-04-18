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
                                   Some quick example text to build on the card title and make up the bulk of
                                   the card's content.
                              </Card.Text>
                         </Card.Body>
                    </Card>
                    <Card className='col-md-4 col-sm-12' style={{ width: '22rem' }}>
                         <Card.Img variant="top" />
                         <Card.Body>
                              <Card.Title className='text-info text-center fs-2'>
                                   Flexible Payment</Card.Title>
                              <Card.Text>
                                   Some quick example text to build on the card title and make up the bulk of
                                   the card's content.
                              </Card.Text>
                         </Card.Body>
                    </Card>
               </div>
          </div>
     );
};

export default WhyChooseMe;
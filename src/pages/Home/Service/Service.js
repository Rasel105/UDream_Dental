import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
     const { id, service_name, img, description } = service;
     const navigate = useNavigate();
     const navigateServiceDetails = id => {
          navigate(`/service/${id}`)
     }
     return (
          <div className=' mx-auto'>
               <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                         <Card.Title className='text-center my-2'>{service_name}</Card.Title>
                         <Card.Text>
                              {description}
                         </Card.Text>
                         <Button variant="primary" onClick={() => navigateServiceDetails(id)}>Go somewhere</Button>
                    </Card.Body>
               </Card>
          </div>
     );
};

export default Service;
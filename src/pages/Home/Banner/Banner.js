import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../images/banner.jpg'
import banner3 from '../../../images/banner-3.jpg'

const Banner = () => {
     return (
          <div>
               <Carousel>
                    <Carousel.Item>
                         <img
                              className="d-block w-100"
                              src={banner}
                              alt="First slide"
                         />
                         <Carousel.Caption>
                              <h3>Friendly Gentle Dentist</h3>
                              <p>Every tooth in a man's head is more valuable than a diamond.</p>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                         <img
                              className="d-block w-100"
                              src={banner3}
                              alt="Second slide"
                         />
                         <Carousel.Caption>
                              <h3>Possible Risk From Dental Fillings.</h3>
                              <p>A dentist at work in his vocation always looks down in the mouth.</p>
                         </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
          </div>
     );
};

export default Banner;
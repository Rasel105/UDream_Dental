import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Service.css'

const Services = () => {
     const [services, setServices] = useState([]);
     useEffect(() => {
          // fetching data 
          fetch('services.json')
               .then(data => data.json())
               .then(res => setServices(res))
     }, [])
     return (
          <div id='services' className='container mb-4'>
               <div className='row'>
                    <h2 className='text-center text-primary my-4'>My Services</h2>
                    <div className='services-container'>
                         {
                              services.map(service => <Service
                                   key={service.id}
                                   service={service}
                              />)
                         }
                    </div>
               </div>
          </div>
     );
};

export default Services;
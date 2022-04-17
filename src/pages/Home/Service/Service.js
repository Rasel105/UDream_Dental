import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
     const { id, service_name, price, img, description } = service;
     const navigate = useNavigate();
     const navigateServiceDetails = id => {
          navigate(`/checkout/${id}`)
     }
     return (
          <div className="card p-2 p-2 border-1 rounded-5">
               <img style={{ height: "200px", borderRadius: "10px" }} src={img} alt="" />
               <div className="card-body">
                    <h4 className="card-title">{service_name}</h4>
                    <h2 className="price">$ {price}</h2>
                    <p>{description}</p>
               </div>
               <p className="btn w-100 px-4 mx-auto">
                    <input onClick={() => navigateServiceDetails(id)} type="submit" className="btn btn-dark btn-lg w-100" name="add-button" value="Buy Now" />
               </p>
          </div>

     );
};

export default Service;
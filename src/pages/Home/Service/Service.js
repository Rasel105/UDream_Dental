import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'
import { ArrowRight } from 'react-bootstrap-icons';


const Service = ({ service }) => {
     const { id, service_name, price, img, description } = service;
     const navigate = useNavigate();
     const navigateServiceDetails = id => {
          navigate(`/checkout/${id}`)
     }
     return (
          <div className="card p-2 p-2 border-1 box-shadow ">
               <img style={{ height: "200px", borderRadius: "10px" }} src={img} alt="" />
               <div className="card-body">
                    <h4 style={{ color: "#5B5EA6" }} className="card-title">{service_name}</h4>
                    <h2 style={{ color: "#45B8AC" }} className="price">$ {price}</h2>
                    <p>{description}</p>
               </div>
               <p className="btn w-100 px-4 mx-auto">
                    {/* <input onClick={() => navigateServiceDetails(id)} type="submit" className="btn btn-dark btn-lg w-100" name="add-button" value="Meet me" /> */}

                    <Button className="btn btn-dark btn-lg w-100" onClick={() => navigateServiceDetails(id)}
                    >Meet me <ArrowRight color="royalblue" size={30} /> </Button>
               </p>
          </div>

     );
};

export default Service;
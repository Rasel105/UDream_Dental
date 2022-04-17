import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
     const { serviceId } = useParams();
     const handleCheckOut = () => {
          toast("Thank You! for the booking");
     }
     return (
          <div>
               <div className="content-body">
                    <div className="form-wrapper">
                         <form className="bg-white">
                              <h1 className="text-title">Checkout</h1>
                              <div className="field-group">
                                   <label className="label" htmlFor="name">Name</label>
                                   <input className="input" type="text" id="name" name="name" required placeholder="Your name" />
                              </div>
                              <div className="field-group">
                                   <label className="label" htmlFor="email">Email address</label>
                                   <input className="input" type="email" id="email" name="email" required placeholder="Enter email..." />
                              </div>
                              <div className="field-group">
                                   <label className="label" htmlFor="address">Address</label>
                                   <input className="input" type="text" id="address" name="address" required placeholder="Enter address..." />
                              </div>
                              <div className="field-group">
                                   <label className="label" htmlFor="phone">Phone</label>
                                   <input className="input" type="number" id="phone" name="phone" required placeholder="Enter phone" />
                              </div>
                              <div className="field-group">
                                   <input onClick={handleCheckOut} className="btn-submit" type="submit" value="Submit" />
                              </div>
                         </form>
                         <ToastContainer />
                    </div>
               </div>
          </div>
     );
};

export default Checkout;
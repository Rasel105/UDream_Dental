import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
     const time = new Date();
     return (
          <footer className='bg-color text-white row d-flex justify-content-center align-items-center p-5'>
               <div className='col-md-6 text-center footer-style'>
                    <Link to="/">Home</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/service">Services</Link>
                    <Link to="/blog">Blogs</Link>
               </div>
               <div className='col-md-6 mt-3'>
                    <p >Copyright &copy; UDreamDental {time.getFullYear()} All Right Reserved.</p>
               </div>
          </footer>
     );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { Facebook } from 'react-bootstrap-icons';
import { Google } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { Youtube } from 'react-bootstrap-icons';

const Footer = () => {
     const time = new Date();
     return (
          <div>
               <footer >
                    <div className='d-flex justify-content-between align-items-center'>
                         <div className='col-md-6 text-center footer-style '>
                              <Link to="/">Home </Link>
                              <Link to="/aboutme">About Me</Link>
                              <Link to="/service">Services</Link>
                              <Link to="/blog">Blogs</Link>

                         </div>
                         <div className='col-md-6 p-3 text-center'>
                              <Facebook className='ms-3 hoverefect' size={30} color={"#3b5998"} />
                              <Youtube className='ms-4' size={30} color={"#FF0000"} />
                              <Google className='ms-4' size={30} color={"#4285F4"} />
                              <Linkedin className='ms-3' size={30} color={"#0e76a8"} />
                              <p className='mb-0 mt-2 text-white'>Copyright &copy; UDreamDental {time.getFullYear()} All Right Reserved.</p>
                         </div>
                    </div>
               </footer >
          </div >
     );
};

export default Footer;
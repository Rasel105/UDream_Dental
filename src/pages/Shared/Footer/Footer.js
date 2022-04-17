import React from 'react';
import './Footer.css'

const Footer = () => {
     const time = new Date();
     return (
          <footer className='bg-color text-white'>
               <div className="d-flex justify-content-between align-items-center px-3 py-3">
                    <p>Copyright &copy; UDreamDental {time.getFullYear()} All Right Reserved.</p>
                    <h5 className="text-uppercase">Footer Content</h5>
               </div>
          </footer>
     );
};

export default Footer;
import React from 'react';
import notfound from '../../../images/Not-Found/NotFound.jpg'
const NotFound = () => {
     return (
          <div className='d-flex justify-content-center align-items-center'>
               <h2 className='display-1 mx-4 text-danger'>404 | Not Found</h2>
               <img className='img-fluid w-50 my-5 rounded' style={{ height: '500px' }} src={notfound} alt="" />
          </div>
     );
};

export default NotFound;
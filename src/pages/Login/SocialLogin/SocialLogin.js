import React from 'react';
import google from '../../../images/social/google_logo.png'
import github from '../../../images/social/github_logo.png'

const SocialLogin = () => {
     return (
          <div >
               <div className='d-flex align-items-center justify-content-center w-50'>
                    <div style={{ height: "1px" }} className='bg-primary w-25'></div>
                    <p className='mt-2 px-3'>or</p>
                    <div style={{ height: "1px" }} className='bg-primary w-25'></div>
               </div >
               <div>
                    <button className='btn btn-info d-block mx-auto my-2'>
                         <img style={{ width: '30px' }} src={google} alt="" />
                         <span className='mx-2 text-white'>Sign in with Google</span>
                    </button>
               </div>
               <div>
                    <button className='btn btn-primary d-block mx-auto my-2'>
                         <img style={{ width: '30px' }} src={github} alt="" />
                         <span className='mx-2 text-white'>Sign in with Google</span>
                    </button>
               </div>

          </div>
     );
};

export default SocialLogin;
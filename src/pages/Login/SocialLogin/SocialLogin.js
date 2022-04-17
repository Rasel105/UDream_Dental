import React from 'react';
import google from '../../../images/social/google_logo.png'
import github from '../../../images/social/github_logo.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SocialLogin = () => {
     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
     const navigate = useNavigate();
     const hanldeSignInWithGoogle = () => {
          signInWithGoogle();
     }
     let errorElement
     if (error) {
          errorElement = <p className='text-danger text-center'> Error {error?.message}</p >
     }

     if (loading) {
          return <Loading />
     }
     if (user) {
          navigate('/home')
          toast("Sign In successfully");
     }
     return (
          <div >
               <small className='text-center d-block my-2-2'>Or</small>
               {errorElement}
               <div>
                    <button
                         onClick={hanldeSignInWithGoogle}
                         className='btn btn-info d-block mx-auto my-2'>
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
               <ToastContainer />
          </div>
     );
};

export default SocialLogin;
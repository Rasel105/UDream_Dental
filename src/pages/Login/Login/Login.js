import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
     const emailRef = useRef('');
     const passwordRef = useRef('');
     const navigate = useNavigate();
     const location = useLocation();
     const from = location.state?.from?.pathname || "/";

     const [
          signInWithEmailAndPassword,
          user,
          loading,
          error,
     ] = useSignInWithEmailAndPassword(auth);

     if (loading) {
          return <Loading />
     }

     if (user) {
          navigate(from, { replace: true });
     }


     const hanleLoginSubmit = event => {
          event.preventDefault();
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          signInWithEmailAndPassword(email, password);

     }

     return (
          <div className="content-body">
               <div className="form-wrapper">
                    <form onSubmit={hanleLoginSubmit} className="bg-white">
                         <h1 className="text-title">Login</h1>
                         <div className="field-group">
                              <label className="label" htmlFor="txt-email">Email address</label>
                              <input className="input" ref={emailRef} type="email" id="txt-email" name="email" placeholder="udreamdental@gmail.com" />
                         </div>
                         <div className="field-group">
                              <label className="label" htmlFor="txt-password">Password</label>
                              <input className="input" ref={passwordRef} type="password" id="txt-password" name="password" placeholder="Enter password" />
                              <p href="#forgot" className="link-forgot">Forgot?</p>
                         </div>

                         <div className="field-group">
                              <input className="btn-submit" type="submit" value="Log In" />
                         </div>
                    </form>

                    <div className="bg-grey">
                         <small className="link-about">Don't have an account?</small>
                         <Link to="/register" className="link-register">Register</Link>
                    </div>
                    <ToastContainer />
               </div>
               <SocialLogin />
          </div>

     );
};

export default Login;
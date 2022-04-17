import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
     const nameRef = useRef('');
     const emailRef = useRef('');
     const passwordRef = useRef('');
     const confirmPasswordRef = useRef('');
     const navigate = useNavigate()

     const [
          createUserWithEmailAndPassword,
          user,
          loading,
          error,
     ] = useCreateUserWithEmailAndPassword(auth);

     if (loading) {
          return <Loading />
     }

     if (user) {
          navigate('/home')
     }

     const handleFormSubmit = event => {
          event.preventDefault();
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          createUserWithEmailAndPassword(email, password);
          toast("Registation Successful!");
     }

     return (
          <div className="content-body">
               <div className="form-wrapper">
                    <form onSubmit={handleFormSubmit} className="bg-white">
                         <h1 className="text-title">Register</h1>
                         <div className="field-group">
                              <label className="label" htmlFor="name">Name</label>
                              <input className="input" ref={nameRef} type="text" id="name" name="name" required placeholder="Your name" />
                         </div>
                         <div className="field-group">
                              <label className="label" htmlFor="email">Email address</label>
                              <input className="input" ref={emailRef} type="email" id="email" name="email" required placeholder="Enter email..." />
                         </div>
                         <div className="field-group">
                              <label className="label" htmlFor="password">Password</label>
                              <input className="input" ref={passwordRef} type="password" id="password" name="password" required placeholder="Enter password" />
                              <p href="#forgot" className="link-forgot">Forgot?</p>
                         </div>
                         <div className="field-group">
                              <label className="label" htmlFor="confirm-password">Confirm Password</label>
                              <input className="input" ref={confirmPasswordRef} type="password" id="confirm-password" name="confirm-password" required placeholder="Enter
                              Confirm password" />
                         </div>

                         <div className="field-group">
                              <input className="btn-submit" type="submit" value="Register" />
                         </div>
                    </form>

                    <div className="bg-grey">
                         <small className="link-about">Have an account?</small>
                         <Link to="/login" className="link-register">Login</Link>
                    </div>
                    <ToastContainer />
               </div>
          </div>
     )
};

export default Register;
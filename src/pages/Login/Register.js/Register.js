import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
     const nameRef = useRef('');
     const emailRef = useRef('');
     const passwordRef = useRef('');
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
          toast('Registation Success! Good to Go!')
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
                              <label className="label" htmlFor="txt-email">Email address</label>
                              <input className="input" ref={emailRef} type="email" id="txt-email" name="email" required placeholder="Enter email..." />
                         </div>
                         <div className="field-group">
                              <label className="label" htmlFor="txt-password">Password</label>
                              <input className="input" ref={passwordRef} type="password" id="txt-password" name="password" required placeholder="Enter password" />
                              <a href="#forgot" className="link-forgot">Forgot?</a>
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
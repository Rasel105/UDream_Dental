import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BoxArrowRight } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

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
     ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

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
          const confrimPassword = confirmPasswordRef.current.value;

          // if () {
          //      toast("Password must be six digit long.")
          // }

          if (password !== confrimPassword || password.length < 6) {
               toast(" Password must be six digit long or  Password didn't match.")
          } else {
               createUserWithEmailAndPassword(email, password);
               toast("Registation Successful!");
               toast("Email Varification sent!")
          }

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
                         </div>
                         <div className="field-group">
                              <label className="label" htmlFor="confirm-password">Confirm Password</label>
                              <input className="input" ref={confirmPasswordRef} type="password" id="confirm-password" name="confirm-password" required placeholder="Enter
                              Confirm password" />
                         </div>

                         <div className="field-group">
                              {/* <input className="btn-submit" type="submit" value="Register" /> */}
                              <Button className="btn-submit" type="submit" value="Log In"> Register <BoxArrowRight className='ms-1' size={25} /></Button>
                         </div>
                    </form>

                    <div className="bg-grey">
                         <small className="link-about">Have an account?</small>
                         {/* <Link to="/login" className="link-register">Login</Link> */}
                         <Link to="/login" className="link-register">Login <BoxArrowRight className='ms-2' size={25} /></Link>
                    </div>
                    <ToastContainer />
               </div>
          </div>
     )
};

export default Register;
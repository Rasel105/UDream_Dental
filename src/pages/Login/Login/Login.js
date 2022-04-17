import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'


const Login = () => {
     return (
          <div className="content-body">
               <div className="form-wrapper">
                    <form className="bg-white">
                         <h1 className="text-title">Login</h1>
                         <div className="field-group">
                              <label className="label" htmlFor="txt-email">Email address</label>
                              <input className="input" type="email" id="txt-email" name="email" placeholder="udreamdental@gmail.com" />
                         </div>
                         <div className="field-group">
                              <label className="label" htmlFor="txt-password">Password</label>
                              <input className="input" type="password" id="txt-password" name="password" placeholder="Enter password" />
                              <a href="#forgot" className="link-forgot">Forgot?</a>
                         </div>

                         <div className="field-group">
                              <input className="btn-submit" type="submit" value="Log In" />
                         </div>
                    </form>

                    <div className="bg-grey">
                         <small className="link-about">Don't have an account?</small>
                         <Link to="/register" className="link-register">Register</Link>
                    </div>
               </div>
          </div>
     );
};

export default Login;
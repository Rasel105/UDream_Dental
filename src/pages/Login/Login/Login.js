import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'


const Login = () => {
     return (
          <div class="content-body">
               <div class="form-wrapper">
                    <form class="bg-white">
                         <h1 class="text-title">Login</h1>
                         <div class="field-group">
                              <label class="label" for="txt-email">Email address</label>
                              <input class="input" type="email" id="txt-email" name="email" placeholder="udreamdental@gmail.com" />
                         </div>
                         <div class="field-group">
                              <label class="label" for="txt-password">Password</label>
                              <input class="input" type="password" id="txt-password" name="password" placeholder="Enter password" />
                              <a href="#forgot" class="link-forgot">Forgot?</a>
                         </div>

                         <div class="field-group">
                              <input class="btn-submit" type="submit" value="Log In" />
                         </div>
                    </form>

                    <div class="bg-grey">
                         <small class="link-about">Don't have an account?</small>
                         <Link to="/register" class="link-register">Register</Link>
                    </div>
               </div>
          </div>
     );
};

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
     return (
          <div class="content-body">
               <div class="form-wrapper">
                    <form class="bg-white">
                         <h1 class="text-title">Register</h1>
                         <div class="field-group">
                              <label class="label" for="name">Name</label>
                              <input class="input" type="text" id="name" name="name" placeholder="Your name" />
                         </div>
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
                              <input class="btn-submit" type="submit" value="Register" />
                         </div>
                    </form>

                    <div class="bg-grey">
                         <small class="link-about">Have an account?</small>
                         <Link to="/login" class="link-register">Login</Link>
                    </div>
               </div>
          </div>
     )
};

export default Register;
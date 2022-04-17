import React from 'react';
import './Blogs.css'
const Blogs = () => {
     return (
          <div className='container my-4'>
               <div className='authorAuth'>
                    <h2>Q.N: 01. Difference between authorization and authentication</h2>
                    <h5>Authentication:</h5>
                    <p>1 . In authentication process, the identity of users are checked for providing the access to the system.</p>
                    <p>2. In authentication process, users or persons are verified</p>
                    <p>It needs usually user's login details.</p>
                    <h5>Authorization:</h5>
                    <p>1. While in authorization process, person's or user's authorities are checked for accessing the resources.</p>
                    <p>2. While in this process, users or persons are validated.</p>
                    <p>3. While this process is done after the authentication process.</p>
               </div>
               <div className='authorAuth'>
                    <h2>Q.N: 02. Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <h5>Ans: </h5>
                    <p></p>Firebase, Backend as a Service, is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too.
                    <h4>Other Options: </h4>
                    <p>There are a lot of alteratives of Firebaser as like: </p>
                    <ul>
                         <li>Parse</li>
                         <li>Back4App</li>
                         <li>AWS Amplify</li>
                         <li>Kuzzle</li>
                         <li>Couchbase. etc</li>
                    </ul>
                    <div className='authorAuth'>
                         <h2>Q.N: 03.What other services does firebase provide other than authentication?</h2>
                         <h5>Ans: </h5>
                         <p>Well, Firebase provides many more services, other than authentication.</p>
                         <p>Like, 1. Realtime database: Data is synced across all clients in realtime and remains available even when an app goes offline.</p>
                         <p>2. Firebase Hosting provides fast hosting for a web app; content is cached into content delivery networks worldwide.</p>
                         <p>3. The application is tested on virtual and physical devices located in Google’s data centers..</p>
                    </div>
               </div>
          </div>
     );
};

export default Blogs;
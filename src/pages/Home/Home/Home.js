import React from 'react';
import SocialLogin from '../../Login/SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
     return (
          <div>
               <SocialLogin />
               <Banner />
               <Services />
          </div>
     );
};

export default Home;
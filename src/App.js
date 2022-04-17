import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header';
import About from './pages/About/About'
import Home from './pages/Home/Home/Home'
import Login from './pages/Login/Login/Login'
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Footer from './pages/Shared/Footer/Footer';
import Checkout from './pages/Checkout/Checkout';
import Blogs from './pages/Blogs/Blogs';
import Register from './pages/Login/Register.js/Register';
import NotFound from './pages/Shared/NotFound/NotFound'
import Services from './pages/Home/Services/Services';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/aboutme' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        {/* <Route path='/service/:serviceId' element={<ServiceDetail />}></Route> */}
        <Route path='/checkout/:serviceId' element={<Checkout />}></Route>
        <Route path='/blog' element={<Blogs />}> </Route>
        <Route path='/service' element={<Services />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header';
import About from './pages/About/About'
import Home from './pages/Home/Home/Home'
import Login from './pages/Login/Login/Login'
import Services from './pages/Home/Services/Services';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='aboutme' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/services' element={<Services />}></Route>
      </Routes>
    </div>
  );
}

export default App;

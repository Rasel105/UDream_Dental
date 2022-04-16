import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header />}></Route>
      </Routes>
    </div>
  );
}

export default App;

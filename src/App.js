import './App.css';
import Header from './Components/Header';
import Footer from './Footer';
import StopWatch from './Components/StopWatch';
import Counter from './Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Home from './Home';
import Clock from './Components/Clock';

function App() {
  return (
    <div>    
      <Header/>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/StopWatch" element={<StopWatch />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Clock" element={<Clock />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}
export default App;

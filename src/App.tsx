import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './pages/main-page';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div className="App">
     <MainPage/>
    </div>
  );
}

export default App;

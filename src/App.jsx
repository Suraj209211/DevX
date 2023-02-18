import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import ParticleBGLanding from './partials/ParticleBGLanding'

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]);

  return (
    <>
      <div className="h-full w-full z-10 absolute">
        <ParticleBGLanding />
      </div>
    <div className="bg-black text-gray-200 ">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
    </>
  );
}

export default App;

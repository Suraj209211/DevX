import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import JoinUs from '../partials/JoinUs';
import Footer from '../partials/Footer';
import ParticleBGLanding from "../partials/ParticleBGLanding";



function Home() {
  const [darkMode, setDarkMode] = React.useState(true)
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
}

  return (
    <>
    <div className="h-full w-full z-10 absolute">
        <ParticleBGLanding />
      </div>
    <div className={`flex flex-col min-h-screen overflow-hidden  ${darkMode ? "light" : "dark"}` }>

   
      {/*  Site header */}
      <Header
      darkMode={darkMode} 
      toggleDarkMode={toggleDarkMode}  />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <FeaturesBlocks />
        <JoinUs/>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
    </>
  );
}

export default Home;
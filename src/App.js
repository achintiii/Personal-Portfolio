// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Experience/>
      <Contact />

    

      {/* Other Sections Can Be Added Here */}
    </div>
  );
}

export default App;

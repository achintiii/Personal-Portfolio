// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Experience/>

    

      {/* Other Sections Can Be Added Here */}
    </div>
  );
}

export default App;

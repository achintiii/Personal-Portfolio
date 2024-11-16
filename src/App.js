// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />

    

      {/* Other Sections Can Be Added Here */}
    </div>
  );
}

export default App;

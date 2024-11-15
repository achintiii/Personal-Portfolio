// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div>
      <NavBar />
      <Home />

      {/* Test Div to Verify Tailwind CSS Integration */}
      <div className="p-4 bg-red-500 text-white">
        Tailwind CSS is working!
      </div>

      {/* Other Sections Can Be Added Here */}
    </div>
  );
}

export default App;

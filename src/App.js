// src/App.js
import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />

      {/* Test Div to Verify Tailwind CSS Integration */}
      <div className="p-4 bg-red-500 text-white">
        Tailwind CSS is working!
      </div>

      {/* Other Sections Can Be Added Here */}
    </div>
  );
}

export default App;

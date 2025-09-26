// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Homepage from './pages/homepage';
// import CFP from './components/CFP/Cfp';
import './App.css';
import Homepage from './pages/homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/cfp" element={<CFP />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
      </div>
    </Router>
  );
}

export default App;

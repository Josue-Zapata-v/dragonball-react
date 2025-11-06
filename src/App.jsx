import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import EntitiesPage from './pages/EntitiesPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/entities" element={<EntitiesPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

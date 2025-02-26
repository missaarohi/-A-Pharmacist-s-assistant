import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import PrescriptionScan from './components/pages/PrescriptionScan';
import MedicineInventory from './components/pages/MedicineInventory';
import MedicineDetails from './components/pages/MedicineDetails';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<PrescriptionScan />} />
          <Route path="/inventory" element={<MedicineInventory />} />
          <Route path="/details/:id" element={<MedicineDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

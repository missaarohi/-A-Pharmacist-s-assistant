import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold">MediTrack</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Home</Link>
            <Link to="/scan" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Scan Prescription</Link>
            <Link to="/inventory" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Inventory</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

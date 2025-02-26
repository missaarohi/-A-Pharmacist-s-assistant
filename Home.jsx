import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to MediTrack</h1>
          <p className="text-xl text-gray-600 mb-8">Your complete solution for prescription management and medicine inventory</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">📋</div>
            <h2 className="text-2xl font-semibold mb-2">Scan Prescriptions</h2>
            <p className="text-gray-600 mb-4">Easily scan and digitize your paper prescriptions for quick access.</p>
            <button 
              onClick={() => navigate('/scan')} 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Scan Now
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">💊</div>
            <h2 className="text-2xl font-semibold mb-2">Medicine Inventory</h2>
            <p className="text-gray-600 mb-4">Keep track of all your medications, dosages, and remaining quantities.</p>
            <button 
              onClick={() => navigate('/inventory')} 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              View Inventory
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">🔍</div>
            <h2 className="text-2xl font-semibold mb-2">Medicine Details</h2>
            <p className="text-gray-600 mb-4">Get detailed information about your medications and possible side effects.</p>
            <button 
              onClick={() => navigate('/inventory')} 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Explore Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

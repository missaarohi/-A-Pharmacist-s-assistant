import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const MedicineInventory = () => {
  const [medications, setMedications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Mock API call with setTimeout
    setTimeout(() => {
      const mockMedications = [
        { id: 1, name: 'Amoxicillin', dosage: '500mg', quantity: 14, refillDate: '2025-03-15', expiryDate: '2026-01-10' },
        { id: 2, name: 'Lisinopril', dosage: '10mg', quantity: 30, refillDate: '2025-03-20', expiryDate: '2026-02-15' },
        { id: 3, name: 'Atorvastatin', dosage: '20mg', quantity: 22, refillDate: '2025-03-05', expiryDate: '2025-12-30' },
        { id: 4, name: 'Ibuprofen', dosage: '400mg', quantity: 8, refillDate: null, expiryDate: '2025-08-15' }
      ];
      setMedications(mockMedications);
      setIsLoading(false);
    }, 1000);
    
    // Axios implementation would look like:
    // const fetchMedications = async () => {
    //   try {
    //     const response = await axios.get('/api/medications');
    //     setMedications(response.data);
    //   } catch (error) {
    //     console.error('Error fetching medications:', error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // fetchMedications();
  }, []);
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Medicine Inventory</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Medication
        </button>
      </div>
      
      {isLoading ? (
        <div className="text-center py-12">
          <p className="text-gray-600">Loading medications...</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Refill Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {medications.map((medication) => (
                <tr key={medication.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{medication.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{medication.dosage}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm ${medication.quantity <= 10 ? 'text-red-600 font-medium' : 'text-gray-500'}`}>
                      {medication.quantity} {medication.quantity <= 10 && '(Low)'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {medication.refillDate || 'Not scheduled'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{medication.expiryDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => navigate(`/details/${medication.id}`)}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      Details
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MedicineInventory;

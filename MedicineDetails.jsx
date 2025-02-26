import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const MedicineDetails = () => {
  const [medication, setMedication] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Mock API call with setTimeout
    setTimeout(() => {
      const mockMedication = {
        id: 1,
        name: 'Amoxicillin',
        dosage: '500mg',
        category: 'Antibiotic',
        description: 'Amoxicillin is a penicillin antibiotic that fights bacteria. It is used to treat many different types of infection caused by bacteria, such as tonsillitis, bronchitis, pneumonia, and infections of the ear, nose, throat, skin, or urinary tract.',
        sideEffects: [
          'Diarrhea',
          'Stomach upset',
          'Headache',
          'Rash',
          'Nausea'
        ],
        interactions: [
          'Allopurinol',
          'Probenecid',
          'Blood thinners',
          'Other antibiotics'
        ],
        quantity: 14,
        refillDate: '2025-03-15',
        expiryDate: '2026-01-10',
        instructions: 'Take one tablet by mouth three times daily with food.',
        prescribedBy: 'Dr. Sarah Johnson'
      };
      setMedication(mockMedication);
      setIsLoading(false);
    }, 1000);
    
    // Axios implementation would look like:
    // const fetchMedicationDetails = async () => {
    //   try {
    //     const response = await axios.get(`/api/medications/1`); // Use params.id in real app
    //     setMedication(response.data);
    //   } catch (error) {
    //     console.error('Error fetching medication details:', error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // fetchMedicationDetails();
  }, []);
  
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-600">Loading medication details...</p>
      </div>
    );
  }
  
  if (!medication) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <p className="text-red-600">Medication not found</p>
        <Link to="/inventory" className="text-blue-600 hover:underline mt-2 inline-block">
          Return to Inventory
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/inventory" className="text-blue-600 hover:underline">
          &larr; Back to Inventory
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{medication.name}</h1>
          <p className="text-lg text-gray-600">{medication.dosage} - {medication.category}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-gray-700 mb-6">{medication.description}</p>
            
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <p className="text-gray-700 mb-6">{medication.instructions}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">Side Effects</h2>
                <ul className="list-disc pl-5">
                  {medication.sideEffects.map((effect, idx) => (
                    <li key={idx} className="text-gray-700 mb-1">{effect}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">Drug Interactions</h2>
                <ul className="list-disc pl-5">
                  {medication.interactions.map((interaction, idx) => (
                    <li key={idx} className="text-gray-700 mb-1">{interaction}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h2 className="text-xl font-semibold mb-3">Medication Information</h2>
            
            <div className="mb-4">
              <p className="text-sm text-gray-500">Current Quantity</p>
              <p className={`text-lg font-medium ${medication.quantity <= 10 ? 'text-red-600' : 'text-gray-700'}`}>
                {medication.quantity} tablets {medication.quantity <= 10 && '(Low)'}
              </p>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-500">Next Refill Date</p>
              <p className="text-lg text-gray-700">{medication.refillDate || 'Not scheduled'}</p>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-500">Expiry Date</p>
              <p className="text-lg text-gray-700">{medication.expiryDate}</p>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-500">Prescribed By</p>
              <p className="text-lg text-gray-700">{medication.prescribedBy}</p>
            </div>
            
            <div className="mt-6 space-y-2">
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Update Quantity
              </button>
              <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                Schedule Refill
              </button>
              <button className="w-full border border-red-600 text-red-600 py-2 rounded hover:bg-red-50">
                Remove Medication
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetails;

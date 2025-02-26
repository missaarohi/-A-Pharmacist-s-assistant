import React, { useState } from 'react';
// import axios from 'axios';

const PrescriptionScan = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState(null);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleScan = async () => {
    if (!selectedFile) return;
    
    setIsScanning(true);
    
    // Mock API request with setTimeout
    // In a real app, you would use axios to send the file to your backend
    setTimeout(() => {
      const mockResults = {
        medications: [
          { name: 'Amoxicillin', dosage: '500mg', frequency: 'Three times daily', duration: '7 days' },
          { name: 'Ibuprofen', dosage: '400mg', frequency: 'As needed for pain', duration: 'Up to 3 days' }
        ],
        doctor: 'Dr. Smith',
        date: '2025-02-20'
      };
      
      setScanResults(mockResults);
      setIsScanning(false);
    }, 2000);
    
    // Axios implementation would look like:
    // try {
    //   const formData = new FormData();
    //   formData.append('prescription', selectedFile);
    //   const response = await axios.post('/api/scan-prescription', formData);
    //   setScanResults(response.data);
    // } catch (error) {
    //   console.error('Error scanning prescription:', error);
    // } finally {
    //   setIsScanning(false);
    // }
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Scan Prescription</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Upload Prescription Image</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        {preview && (
          <div className="mb-6">
            <p className="text-gray-700 mb-2">Preview:</p>
            <img src={preview} alt="Prescription preview" className="max-h-64 border border-gray-300 rounded" />
          </div>
        )}
        
        <button 
          onClick={handleScan} 
          disabled={!selectedFile || isScanning}
          className={`px-4 py-2 rounded text-white ${!selectedFile || isScanning ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isScanning ? 'Scanning...' : 'Scan Prescription'}
        </button>
        
        {scanResults && (
          <div className="mt-8 border-t pt-6">
            <h2 className="text-2xl font-semibold mb-4">Scan Results</h2>
            <div className="bg-gray-50 p-4 rounded">
              <p><span className="font-semibold">Date:</span> {scanResults.date}</p>
              <p><span className="font-semibold">Doctor:</span> {scanResults.doctor}</p>
              
              <h3 className="font-semibold mt-4 mb-2">Medications:</h3>
              <ul className="list-disc pl-6">
                {scanResults.medications.map((med, idx) => (
                  <li key={idx} className="mb-2">
                    <p className="font-medium">{med.name} ({med.dosage})</p>
                    <p className="text-sm text-gray-600">Take {med.frequency} for {med.duration}</p>
                  </li>
                ))}
              </ul>
              
              <button 
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Add to Inventory
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrescriptionScan;

import React, { useState } from 'react';

function AadhaarVerification() {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/verify-aadhaar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ aadhaarNumber })
      });

      const result = await response.json();
      setVerificationStatus(result.valid ? 'Aadhaar number is valid' : 'Aadhaar number is invalid');
    } catch (error) {
      console.error('Error verifying Aadhaar number:', error);
      setVerificationStatus('Verification failed');
    }
  };

  return (

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh',  // Ensure full viewport height
      textAlign: 'center', // Center text inside the container
      padding: '20px'      // Add some padding
    }}>
    <h1>AadharCard Verification</h1>
      <input
        type="text"
        value={aadhaarNumber}
        onChange={(e) => setAadhaarNumber(e.target.value)}
        placeholder="Enter Aadhaar Number"
        style={{
          fontSize: 'larger',
          marginTop: '20px',
          padding: '10px',
          width: '200px',  // Optional: Set a fixed width for the input box
          border: '1px solid #ccc',
          borderRadius: '4px',
          margin:'auto'
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: 'green',
          fontSize: 'larger',
          marginTop: '20px',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Verify
      </button>
      <div style={{ marginTop: '20px' }}>
        {verificationStatus}
      </div>
    </div>
  );
}

export default AadhaarVerification;

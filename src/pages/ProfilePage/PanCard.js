
import React, { useState } from 'react';

function isValidPAN(panNumber) {
  // PAN card number format: 5 letters, 4 digits, 1 letter
  const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  return panPattern.test(panNumber);
}

function PanVerification() {
  const [panNumber, setPanNumber] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleSubmit = async () => {
    if (!isValidPAN(panNumber)) {
      setVerificationStatus('Invalid PAN number format');
      return;
    }

    try {
      const response = await fetch('/api/verify-pan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ panNumber })
      });

      const result = await response.json();
      setVerificationStatus(result.valid ? 'PAN number is valid' : 'PAN number is invalid');
    } catch (error) {
      console.error('Error verifying PAN number:', error);
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
    
      <input
        type="text"
        value={panNumber}
        onChange={(e) => setPanNumber(e.target.value)}
        placeholder="Enter PAN Number"
        style={{
            fontSize: 'larger',
            marginTop: '30px',
            padding: '10px',
            width: '300px',  // Optional: Set a fixed width for the input box
            border: '1px solid #ccc',
            borderRadius: '4px',
            margin:'auto'
          }}
      />
      <button onClick={handleSubmit} style={{
          backgroundColor: 'green',
          fontSize: 'larger',
          marginTop: '20px',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>Verify</button>
      <div style={{ marginTop: '20px' }}>{verificationStatus}</div>
    </div>
  );
}

export default PanVerification;

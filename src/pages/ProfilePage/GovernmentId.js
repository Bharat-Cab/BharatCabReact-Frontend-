import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GovernmentId() {
  const navigate = useNavigate();

  const handlePanCard = () => {
    navigate('/PanCard');
  };

  const handleAdharCard = () => {
    navigate('/AdharCard');
  };

  return (
    <div>
      <h1 align="center"><strong>Which document would you like to upload?</strong></h1>
      <br />
      <br />
      <h3 align="center" onClick={handlePanCard} style={{ cursor: 'pointer',color:'blue', fontSize:'30px'}}>
        PAN card
      </h3>
      <br />
      <h3  align="center" onClick={handleAdharCard} style={{ cursor: 'pointer',color:'blue', fontSize:'30px'}}>
        Aadhaar card
      </h3>
      <br />
    </div>
  );
}

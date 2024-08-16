import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TravelPreference() {
  const navigate = useNavigate();

  const handleChatsClick = () => {
    navigate('/Chatting');
  };
  
  const handleMusicClick = () => {
    navigate('/Music');
  };
  
  const handlePetsClick = () => {
    navigate('/Pets');
  };

  return (
    <div>
      <h1><strong>Travel Preference</strong></h1><br></br>
      <div>
        <h2 onClick={handleChatsClick} style={{ cursor: 'pointer', color:'blue' }} align="center">Chattiness</h2>
        <h2 onClick={handleMusicClick} style={{ cursor: 'pointer',color:'blue' }} align="center">Music</h2>
        <h2 onClick={handlePetsClick} style={{ cursor: 'pointer',color:'blue' }} align="center">Pets</h2>
      </div>
    </div>
  );
}

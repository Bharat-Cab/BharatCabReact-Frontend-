import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {

    localStorage.removeItem('authToken'); 
    navigate('/'); 
  }, [navigate]);

  return (
    <div>
      <h1>Logging Out...</h1>
    </div>
  );
}

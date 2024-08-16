import React from "react";
import "./style.css"; // Ensure this path is correct based on your directory structure
import { useNavigate } from "react-router-dom";
export default function Page3() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/profile');
  };
  return (
    <div className="page3-container">
     <h1><b>What would you like other members to know about you?</b></h1>
        <textarea
          name="ta"
          id="ta"
          placeholder="What are your interests"
          className="text-area"
        ></textarea>
        <div>
          <button>Save</button>
          <button onClick={handleBack}>Back</button>
        </div>
       
    </div>
  );
}

import React from 'react';
import './ProfilePage.css';
import { useNavigate } from 'react-router-dom';
import './PersonalDetails';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleEditPersonalDetails = () => {
    navigate('/PersonDetails');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-picture"></div>
        <div className="profile-info">
          <h2>Shubham</h2>
          <p>Newcomer</p>
        </div>
      </div>

      <hr className="divider" />

      <div className="profile-section">
        <p className="section-title">Profile Details</p>
        <ul>
          <li><a href='/ProfilePicture'>Edit Personal Details</a></li>
          <li><p className="section-title">Verify your profile.</p></li>
          <li><a href="/GovernmentId">+ Verify your Govt. ID</a></li>
          <li><a href="#">+ Confirm email belikebhama@gmail.com</a></li>
          <li className="verified-item"><span>✔</span> +917058788128</li>
        </ul>
      </div>

      <hr className="divider" />

      <div className="profile-section">
        <p className="section-title">About you</p>
        <ul>
          <li><a href="/AddMiniBio">+ Add a mini bio</a></li>
          <li><a href="/TravelPreference">+ Edit travel preferences</a></li>
        </ul>
      </div>

      <div className="profile-section">
        <p className="section-title">Vehicles</p>
        <ul>
          <li><a href="/VehicleBrand">+ Add vehicle</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;

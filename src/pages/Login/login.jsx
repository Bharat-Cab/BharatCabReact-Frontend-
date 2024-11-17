import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';

function LoginPage() {
  const navigate = useNavigate();
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    // Simulated user credentials
    const validEmail = "abc";
    const validPassword = "abc";

    if (userEmail === validEmail && userPassword === validPassword) {
      // Simulate token storage (if needed)
      localStorage.setItem("token", "fake-jwt-token");
      navigate('/home'); // Redirect to home page
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <MDBContainer fluid className="p-3 my-5" style={{ backgroundColor: '#ebedee' }}>
      <MDBRow>
        <MDBCol md='6'>
          <img src={require('./login.gif')} className="img-fluid" alt="Car GIF" />
        </MDBCol>

        <MDBCol md='6' className="d-flex justify-content-center align-items-center" style={{ minHeight: '30vh' }}>
          <div>
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center' }}>
              BharatCab Your Travel Partner
            </h2>

            <MDBInput
              wrapperClass='mb-4'
              label='E-mail'
              id='formControlLg'
              type='email'
              size="lg"
              value={userEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass='mb-4'
              label='Password'
              id='formControlLg'
              type='password'
              size="lg"
              value={userPassword}
              onChange={(e) => setPassword(e.target.value)}
            />

            {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}

            <div className="d-flex justify-content-between mx-4 mb-4">
              <a href="#!">Forgot password?</a>
            </div>

            <div className="d-flex justify-content-between">
              <MDBBtn className="w-50 me-2" size="lg" onClick={handleSignIn}>Sign in</MDBBtn>
              <MDBBtn className="w-50 ms-2" color="success" size="lg" onClick={handleSignUp}>Sign up</MDBBtn>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginPage;

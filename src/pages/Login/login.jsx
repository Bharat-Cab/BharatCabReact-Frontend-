import React from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function LoginPage() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // You can add authentication logic here
    navigate('/home');
  };

  const handleSignUp = () => {
    navigate('/page');
  };

  return (
    <MDBContainer fluid className="p-3 my-5" style={{ backgroundColor: '#ebedee' }} >
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src={require('./login.gif')} className="img-fluid" alt="Car GIF" />
        </MDBCol>

        <MDBCol col='4' md='6' className="d-flex justify-content-center align-items-center">
          <div>
            {/* Title Section */}
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center' }}>
              BharatCab Your Travel Partner
            </h2>

            <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='email' size="lg" />
            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="#!">Forgot password?</a>
            </div>

            {/* Sign In and Sign Up Buttons in the same row */}
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
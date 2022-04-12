import React from 'react';
import SignupForm from '../components/SingupForm';

const Signup = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{ border: '2px solid #ccc', borderRadius: '10px', padding: 32 }}
      >
        <h2>Register</h2>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;

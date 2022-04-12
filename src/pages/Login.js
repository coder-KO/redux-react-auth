import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
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
        <h2>Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

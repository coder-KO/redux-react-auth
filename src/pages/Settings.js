import React from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
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
      <h1>Settings</h1>
      <h4 style={{ marginTop: -16 }}>
        <Link to='/dashboard' style={{ textDecoration: 'none' }}>
          {' '}
          &larr; Back
        </Link>
      </h4>
    </div>
  );
};

export default Settings;

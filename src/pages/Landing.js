import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAction } from '../_actions/auth.actions';

const Landing = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(logoutAction());
  };

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
      <h1>Landing Page</h1>
      <div style={{ display: 'flex', marginTop: -32 }}>
        <h4 style={{ padding: 16 }}>
          {auth.isLoggedIn ? (
            <>Logged in as {auth.userData.name}</>
          ) : (
            <Link to='/login'>Login</Link>
          )}
        </h4>
        <h4 style={{ padding: 16 }}>
          {auth.isLoggedIn ? (
            <span onClick={logout} style={{ cursor: 'pointer' }}>
              Logout
            </span>
          ) : (
            <Link to='/signup'>Signup</Link>
          )}
        </h4>
      </div>
    </div>
  );
};

export default Landing;

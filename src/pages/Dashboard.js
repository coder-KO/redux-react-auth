import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAction } from '../_actions/auth.actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(logoutAction());
    navigate('/');
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
      <>
        <h1>Dashboard</h1>

        <div style={{ display: 'flex', marginTop: -32 }}>
          <h4 style={{ padding: 16 }}>
            <Link to='/'>Home</Link>
          </h4>
          <h4 style={{ padding: 16 }}>
            <>Logged in as {auth.userData.name}</>
          </h4>
          <h4 style={{ padding: 16 }}>
            <span onClick={logout} style={{ cursor: 'pointer' }}>
              Logout
            </span>
          </h4>
        </div>
      </>
    </div>
  );
};

export default Dashboard;

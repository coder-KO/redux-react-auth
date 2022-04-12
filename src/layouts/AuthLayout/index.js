import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../routes';

const AuthLayout = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <h1>AUTH LAYOUT</h1>
      <hr />
      <React.Fragment>
        {isLoggedIn ? props.children : <Navigate to={routes.login} />}
      </React.Fragment>
    </>
  );
};

export default AuthLayout;

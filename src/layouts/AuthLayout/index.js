import React from 'react';

const AuthLayout = (props) => {
  return (
    <>
      <h1>AUTH LAYOUT</h1>
      <hr />
      <React.Fragment>{props.children}</React.Fragment>
    </>
  );
};

export default AuthLayout;

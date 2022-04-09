import React from 'react';

const PublicLayout = (props) => {
  return (
    <>
      <h1>PUBLIC LAYOUT</h1>
      <hr />
      <React.Fragment>{props.children}</React.Fragment>
    </>
  );
};

export default PublicLayout;

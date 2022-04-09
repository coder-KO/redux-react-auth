import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { signin } from '../../actions/auth.actions';

const Login = () => {
  const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);
  const state = useSelector((state) => state);
  const [creds, setCreds] = React.useState({
    userId: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(creds));
    setCreds({
      userId: '',
      password: '',
    });
  };

  console.log(state);

  // if (auth._id) <Navigate to='/' />;

  return (
    <>
      <form action='post' onSubmit={handleSubmit}>
        <input
          type='text'
          name='userId'
          id='userId'
          placeholder='User ID'
          value={creds.userId}
          onChange={(e) => setCreds({ ...creds, userId: e.target.value })}
        />
        <br />
        <br />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        />
        <br />
        <br />
        <input type='submit' />
      </form>
    </>
  );
};

export default Login;

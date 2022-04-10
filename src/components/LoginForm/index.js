import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginAction } from '../../_actions/auth.actions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [creds, setCreds] = React.useState({
    userId: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(loginAction(creds));
    setCreds({
      userId: '',
      password: '',
    });
    navigate('/dashboard');
  };

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
        <input
          type='submit'
          value={loading ? 'Loading...' : 'Submit'}
          disabled={loading}
        />
      </form>
    </>
  );
};

export default Login;

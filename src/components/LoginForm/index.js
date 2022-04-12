import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { loginAction } from '../../_actions/auth.actions';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
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
    setLoading(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
    //eslint-disable-next-line
  }, [isLoggedIn]);

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
        <Link to='/signup' style={{ float: 'left', textDecoration: 'none' }}>
          Register
        </Link>
        <input
          type='submit'
          value={loading ? 'Loading...' : 'Submit'}
          disabled={loading}
          style={{ float: 'right' }}
        />
      </form>
    </>
  );
};

export default Login;

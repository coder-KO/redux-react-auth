import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { loginAction } from '../../_actions/auth.actions';

const Login = ({ loginAction, auth }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [creds, setCreds] = React.useState({
    userId: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await loginAction(creds);
    setCreds({
      userId: '',
      password: '',
    });
    setLoading(false);
  };

  useEffect(() => {
    if (auth.isLoggedIn) {
      navigate('/dashboard');
    }
    //eslint-disable-next-line
  }, [auth.isLoggedIn]);

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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginAction })(Login);

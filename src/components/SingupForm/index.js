import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { registerAction } from '../../_actions/auth.actions';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = React.useState({
    name: '',
    userId: '',
    role: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(registerAction(user));
    setUser({
      name: '',
      userId: '',
      role: '',
      password: '',
    });
    setLoading(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);

  return (
    <>
      <form action='post' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Name'
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <br />
        <br />
        <input
          type='text'
          name='userId'
          id='userId'
          placeholder='User ID'
          value={user.userId}
          onChange={(e) => setUser({ ...user, userId: e.target.value })}
        />
        <br />
        <br />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <br />
        <br />
        <select
          name='role'
          id='role'
          value={user.role}
          onChange={(e) => {
            let val = e.target.value;
            setUser({ ...user, role: val });
          }}
          style={{ width: '100%' }}
        >
          <option value=''>SELECT</option>
          <option value='admin'>Admin</option>
        </select>
        <br />
        <br />
        <Link to='/login' style={{ float: 'left', textDecoration: 'none' }}>
          Login
        </Link>
        <input
          style={{ float: 'right' }}
          type='submit'
          value={loading ? 'Submitting...' : 'Submit'}
          disabled={loading}
        />
      </form>
    </>
  );
};

export default Signup;

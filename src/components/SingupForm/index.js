import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signup } from '../../actions/auth.actions';

const Signup = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = React.useState({
    name: '',
    userId: '',
    role: '',
    password: '',
  });

  console.log(auth._id);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(user));
    setUser({
      name: '',
      userId: '',
      role: '',
      password: '',
    });
  };

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
        >
          <option value=''>SELECT</option>
          <option value='admin'>Admin</option>
        </select>
        <br />
        <br />
        <input type='submit' />
      </form>
    </>
  );
};

export default Signup;

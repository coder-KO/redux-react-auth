import axios from 'axios';
import SERVER_URL from '../api';

export const signup = (user) => {
  return async (dispatch) => {
    try {
      const userData = await axios.post(`${SERVER_URL}/auth/signup`, user);
      localStorage.setItem('token', userData.data.token);

      dispatch({
        type: 'SIGN_UP',
        token: userData.data.token,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const signin = (creds) => {
  return async (dispatch) => {
    try {
      const userData = await axios.post(`${SERVER_URL}/auth/signin`, creds);
      localStorage.setItem('token', userData.data.token);

      dispatch({
        type: 'SIGN_IN',
        token: userData.data.token,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

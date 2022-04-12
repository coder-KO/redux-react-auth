import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_ALERT,
} from './types';
import { register, login, logout } from '../_services/auth.service';

export const registerAction = (userData) => async (dispatch) => {
  try {
    const response = await register(userData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: response,
    });
    dispatch({
      type: SET_ALERT,
      payload: response.message,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
    });
    dispatch({
      type: SET_ALERT,
      payload: error.toString(),
    });
  }
};

export const loginAction = (creds) => async (dispatch) => {
  try {
    const response = await login(creds);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response,
    });
    dispatch({
      type: SET_ALERT,
      payload: response.message,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch({
      type: SET_ALERT,
      payload: error.toString(),
    });
    console.log('ERROR', error);
  }
};

export const logoutAction = () => (dispatch) => {
  logout();
  dispatch({
    type: LOGOUT,
  });
};
// import SERVER_URL from '../api';

// export const signup = (user) => {
//   return async (dispatch) => {
//     try {
//       const userData = await axios.post(`${SERVER_URL}/auth/signup`, user);
//       localStorage.setItem('user', userData.data);

//       dispatch({
//         type: 'SIGN_UP',
//         userData: userData.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const signin = (creds) => {
//   return async (dispatch) => {
//     try {
//       const userData = await axios.post(`${SERVER_URL}/auth/signin`, creds);

//       localStorage.setItem('user', userData.data);

//       dispatch({
//         type: 'SIGN_IN',
//         userData: userData.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const loadUser = () => {
//   return (dispatch, getState) => {
//     console.log('LOAD', getState().auth);
//     const token = getState().auth.token;
//     if (token) {
//       dispatch({
//         type: 'USER_LOADED',
//         token,
//       });
//     } else return null;
//   };
// };

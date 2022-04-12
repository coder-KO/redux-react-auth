import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../_actions/types';

const userData = JSON.parse(localStorage.getItem('user'));
const initialState = userData
  ? { isLoggedIn: true, userData }
  : { isLoggedIn: false, userData: null };

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userData: payload.user,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      console.log('PAYLOAD', payload);
      return {
        ...state,
        isLoggedIn: true,
        userData: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        userData: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userData: null,
      };
    default:
      return state;
  }
};

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SIGN_IN':
//     case 'SIGN_UP':
//       const user = action.userData.user;
//       alert('Welcome ' + action.userData.user.name);
//       return {
//         ...initialState,
//         token: action.userData.token,
//         _id: user._id,
//         role: user.role,
//         name: user.name,
//         userId: user.userId,
//       };
//     default:
//       return state;
//   }
// };

export default authReducer;

import jwtDecode from 'jwt-decode';

const initialState = {
  token: localStorage.getItem('token'),
  _id: '',
  role: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
    case 'SIGN_UP':
      const user = jwtDecode(action.token);
      alert('Welcome ' + user.role);
      return {
        ...initialState,
        token: action.token,
        _id: user._id,
        role: user.role,
      };
    default:
      return state;
  }
};

export default authReducer;

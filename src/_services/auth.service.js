import axios from 'axios';
import SERVER_URL from './api';

export const login = async (creds) => {
  try {
    const response = await axios.post(`${SERVER_URL}/auth/signin`, creds);

    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const register = async (userData) => {
  try {
    const response = await axios.post(`${SERVER_URL}/auth/signup`, userData);

    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

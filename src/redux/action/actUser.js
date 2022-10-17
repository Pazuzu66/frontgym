import { backApi } from '../../api/backApi';
import { types } from '../types/types';
import Swal from 'sweetalert2';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

export const handleLogin = (username, password, navigate) => {
  return async dispatch => {
    await dispatch(startLogin());
    try {
      const { data } = await backApi.post('auth/login', {
        username,
        password,
      });
      localStorage.setItem('auth-token', data.token);
      setTimeout(async () => {
        await dispatch(dispatchLogin(data.token));
        navigate('/home', { replace: true });
      }, 1200);
    } catch (error) {
      // console.log(error.response)
      if (error.response.data) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: error.response.data.msg,
          timer: 1300,
          showConfirmButton: false,
        });
      }
    }
    setTimeout(async () => {
      await dispatch(finishLogin());
    }, 1200);
  };
};

export const handleLogout = () => {
  return async dispatch => {
    await dispatch(startLogin());
    try {
      localStorage.removeItem('auth-token');
      await dispatch(dispatchLogout());
    } catch (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'No se pudo hacer log out',
        timer: 1300,
        showConfirmButton: false,
      });
    }
    setTimeout(async () => {
      await dispatch(finishLogin());
    }, 500);
  };
};

export const checkToken = () => {
  return async dispatch => {
    // await dispatch(startLogin())
    const token = localStorage.getItem('auth-token');
    if (token !== null) {
      const response = await axios.post(
        'auth/validate',
        {},
        {
          headers: {
            jtoken: token,
          },
        }
      );
      if (response.data.error === true) {
        await dispatch(dispatchLogout());
      } else {
        await dispatch(dispatchLogin());
      }
    }
    await dispatch(finishLogin());
  };
};
const dispatchLogin = (token = '') => ({
  type: types.handleLogin,
  payload: { token: token },
});

const dispatchLogout = () => ({
  type: types.handleLogout,
  payload: {},
});

const startLogin = () => ({
  type: types.startLogin,
  payload: {},
});
const finishLogin = () => ({
  type: types.finishLogin,
  payload: {},
});

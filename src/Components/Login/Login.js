import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { handleLogin } from '../../redux/action/actUser';
import {
  LoginCover,
  LoginInput,
  LoginPasswordInput,
  LoginSubmitButton,
} from './components';

const formDefaultValues = {
  username: '',
  password: '',
};

const schema = yup.object().shape({
  username: yup
    .string()
    .required('El usuario es requerido')
    .min(3, 'Debe de tener al menos 3 caracteres'),
  password: yup
    .string()
    .required('La contraseña es requerida')
    .min(3, 'Debe de tener al menos 3 caracteres'),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues: formDefaultValues,
    resolver: yupResolver(schema),
  });
  const localSubmit = values => {
    // alert(JSON.stringify(values))
    dispatch(handleLogin(values.username, values.password, navigate));
  };
  const { isLoading } = useSelector(store => store.auth);

  return (
    <>
      <div className='flex justify-center w-screen min-h-screen bg-themeDark-500 text-white relative lg:items-center'>
        <div className='flex flex-col w-full lg:max-w-[40rem] border-indigo-500 lg:rounded-2xl lg:overflow-hidden lg:shadow-lg lg:shadow-themeTrueGray-500 pb-32 relative'>
          <LoginCover />
          <form
            onSubmit={handleSubmit(localSubmit)}
            className='flex flex-col w-full gap-4 px-8'>
            <LoginInput
              control={control}
              name='username'
              label='Usuario'
              type='text'
            />
            <LoginPasswordInput
              control={control}
              name='password'
              label='Contraseña'
            />
            <div className='flex justify-end px-4 cursor-pointer text-themePrimary-500 font-bold'>
              <button type='button'>Olvidé mi contraseña</button>
            </div>
            <div className='absolute flex justify-center px-10 py-10 w-full left-0 right-0 bottom-0'>
              <div className='flex w-full justify-end lg:max-w-[40rem]'>
                <LoginSubmitButton isLoading={isLoading} onClick={handleSubmit(localSubmit)} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

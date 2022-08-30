import React from "react";
import { handleLogin } from "../../redux/action/actUser";
import { useForm } from "../../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

const formInitialState = {
  username: "",
  password: ""
}

const Login = () => {
  const [formValues, handleFormValues, reset] = useForm(formInitialState);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const HandleSubmit = (event) => {
    event.preventDefault();
    dispatch(handleLogin(formValues.username, formValues.password, navigate))
    reset()
  }
  const {isAuthenticated, isLoading} = useSelector(store => store.auth)
  
  
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <div className="flex flex-col">
          <div className="flex-row text-center text-4xl font-bold">
            <h1>Login</h1>
          </div>
          <div className="flex text-2xl text-center my-5 ">
            <form onSubmit={HandleSubmit}>
              <div className="flex flex-col items-center space-y-5">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  className="rounded-xl bg-black text-white border-2 border-blue-900 indent-3 shadow-md shadow-blue-900/50 hover:border-blue-600 hover:border-3 focus:border-blue-600 focus:border-4"
                  placeholder="username..."
                  type="text"
                  name="username"
                  required
                  value={formValues.username}
                  disabled={isLoading && true}
                  autoComplete='off'
                  onChange={handleFormValues}
                />
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  className="rounded-xl bg-black text-white border-2 border-blue-900 indent-3 shadow-md shadow-blue-900/50 hover:border-blue-600 hover:border-3 focus:border-blue-600 focus:border-4"
                  placeholder="**********"
                  type="password"
                  name="password"
                  autoComplete="off"
                  required
                  value={formValues.password}
                  disabled={isLoading && true}
                  onChange={handleFormValues}
                />
              </div>
              <div className="pt-10">
                <button
                  type="submit"
                  className="bg-purple-700 rounded-full hover:bg-blue-600 w-60 h-auto"
                  disabled={isLoading && true}
                >
                  {isLoading ? 'Login in' : 'Login'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

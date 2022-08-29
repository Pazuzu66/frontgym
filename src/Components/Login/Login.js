import React from "react";
import Swal from "sweetalert2";
import { authUser } from "../../action/actUser";
import { useForm } from "../../hooks/useForm";

const Login = () => {
  const [formValues, handleFormValues] = useForm({
    username: "",
    password: ""
  });
  const HandleSubmit = async (event) => {
    event.preventDefault();
    await authUser(formValues).then((response) => {
      if (response.status != 200) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Usuario y/o contraseña Incorrecta",
          timer: 1300,
          showConfirmButton: false
        })
      } else {
        //Aquí tendría el token y debo guardarlo en Redux o en el localStorage
        const token = response.data.token
        //---------------------------------------------------------------------
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Bienvenido",
          timer: 1000,
          showConfirmButton: false
        })
      }
    });
  }
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
                  onChange={handleFormValues}
                />
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  className="rounded-xl bg-black text-white border-2 border-blue-900 indent-3 shadow-md shadow-blue-900/50 hover:border-blue-600 hover:border-3 focus:border-blue-600 focus:border-4"
                  placeholder="**********"
                  type="password"
                  name="password"
                  autoComplete="on"
                  required
                  onChange={handleFormValues}
                />
              </div>
              <div className="pt-10">
                <button
                  type="submit"
                  className="bg-purple-700 rounded-full hover:bg-blue-600 w-60 h-auto"
                >
                  Login
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

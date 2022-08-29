import React from "react";
import PropTypes from "prop-types";
import { useForm } from "../../hooks/useForm";
import { addNote } from "../../action/actExercises";

const Form = ({ handleClose }) => {
  const [ formValues, handleFormValues ] = useForm({
    exercise: "",
    weight: "",
    repetitions: "",
    note: ""
  })
  const handleSubmit = async( event ) => {    
    event.preventDefault();
    await addNote("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWY3MTUyMDU4YjA2MzEwYjg0OGFkN2IiLCJpYXQiOjE2NjE4MTM4NjksImV4cCI6MTY2MTgyODI2OX0.QRYhcEAhF0u7ZHa4UJf62MqGXAHfLqg2_Iu1qQV1BzE", formValues).then(() => console.log('Si jaló'))
  }
  return (
    <>
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-gray-700 rounded-lg shadow">
            <button
              onClick={handleClose}
              type="button"
              className=" bg-gray-800 text-white absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-white">
                Nueva Nota
              </h3>
              <form className="space-y-6" onSubmit={ handleSubmit }>
                <div>
                  <label
                    htmlFor="ejercicio"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Ejercicio
                  </label>
                  <input
                    type="text"
                    name="exercise"
                    id="ejercicio"
                    className="border bg-gray-600 border-gray-500 text-white text-sm placeholder-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Yeah Buddy"
                    required
                    onChange={ handleFormValues }
                  />
                </div>
                <div>
                  <label
                    htmlFor="weight"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Peso (Kg)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    id="weight"
                    placeholder="Light Weight Baby"
                    className="bg-gray-600 border border-gray-500 placeholder-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    onChange={ handleFormValues }
                  />
                </div>
                <div>
                  <label
                    htmlFor="repetitions"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Repeticiones
                  </label>
                  <input
                    type="number"
                    name="repetitions"
                    id="repetitions"
                    placeholder="De tu mejor serie o en promedio"
                    className="bg-gray-600 border border-gray-500 placeholder-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    onChange={ handleFormValues }
                  />
                </div>
                <div>
                  <label
                    htmlFor="note"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Obervación
                  </label>
                  <input
                    type="text"
                    name="note"
                    id="note"
                    placeholder="Con/sin faja, etc"
                    className="bg-gray-600 border border-gray-500 placeholder-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    onChange={ handleFormValues }
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Guardar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Form.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
export default Form;

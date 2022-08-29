import React from "react";
import PropTypes from "prop-types";
import pesa from "../../assets/pesa.png";

const Card = ({ exercise = "", date, kg = 0, repetitions = 0 }) => {
  return (
    <>
      <div className="px-2 py-2 text-white w-44">
        <div className="rounded-t-3xl rounded-b-3xl overflow-hidden shadow-lg bg-indigo-900">
          <div className="px-6 py-4">
            <div className="font-bold">{exercise}</div>
            <h1>{date}</h1>
            <div className="row">
              <label>Peso: {kg} kg</label>
            </div>
            <div className="row">
              <label>Reps: {repetitions} </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

Card.propTypes = {
  exercise: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  kg: PropTypes.number.isRequired,
  repetitions: PropTypes.number.isRequired,
};

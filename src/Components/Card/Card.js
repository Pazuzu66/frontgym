import React from "react";
import PropTypes from "prop-types";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Card = ({ exercise = "", date, kg = 0, repetitions = 0, note = null, actionEddit, actionDelete }) => {
  return (
    <>
      <div className="px-2 py-2 text-white w-44">
        <div className="rounded-t-3xl rounded-b-3xl overflow-hidden shadow-lg bg-indigo-900">
          <div className="px-6 py-4">
            <div className="font-bold">{exercise}</div>
            <h1>{date}</h1>
            <div className="flex flex-row">
              <label>Peso: {kg} kg</label>
            </div>
            <div className="flex flex-row">
              <label>Reps: {repetitions} </label>
            </div>
            {note
              ?
              <div className="flex flex-row">
                <label>Nota: {note} </label>
              </div>
              :
              null
            }
            <div className="flex flex-row justify-between">
              <EditIcon fontSize="small" onClick={actionEddit} />
              <DeleteIcon fontSize="small" onClick={actionDelete} />
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
  actionEddit: PropTypes.func.isRequired,
  actionDelete: PropTypes.func.isRequired
};

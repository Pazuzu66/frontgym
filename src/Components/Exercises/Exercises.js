import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Navbar from "../Navs/Navbar";
import Modal from "./Modal";
import Form from "./Form";
import { getNotes, deleteNote } from "../../redux/action/actExercises";

export const Exercises = () => {
  const token  = localStorage.getItem('auth-token')
  const day = new Date();
  const [object, setObject] = useState(null);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes(
      token).then((data) => {
        setNotes(data);
      }
      )
  }, [token]);
  const [show, setShow] = useState(false);
  const handleShow = (uid = "") => {
    if (uid !== "") {
      setObject(notes.find(element => element.uid === uid));
      setShow(true);
    }
  }
  const handleClose = () => {
    setShow(false);
  };
  const handleDelete = (uid = "") => {
    deleteNote(token, uid)
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center p-3 text-white">
        <Navbar />
        <div className="flex flex-row">
          <h1 className="text-2xl font-mono">Ejercicios</h1>
        </div>
        <div className="flex flex-row">
          <h1 className="text-2xl font-mono">
            Hoy es: {day.toLocaleDateString()}
          </h1>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center font-sans">
        {notes !== [] ? (
          notes.map((note, i) => {
            return (
              <Card
                key={i}
                exercise={note.exercise}
                date={note.date}
                kg={note.weight}
                note={note.note}
                repetitions={note.repetitions}
                actionEddit={() => handleShow(note.uid)}
                actionDelete={() => handleDelete(note.uid)}
              />
            );
          })
        ) : (
          <Card
            exercise={"Press Banca"}
            date={"2022-04-20"}
            kg={20}
            repetitions={10}
          />
        )}
      </div>
      <div className="flex flex-row justify-center p-3 text-white">
        <button
          className="bg-purple-700 rounded-full w-60 h-auto text-lg hover:bg-blue-600"
          onClick={handleShow}
        >
          Nuevo Registro
        </button>
      </div>
      <Modal show={show}>
        <Form handleClose={handleClose} objectNote={object} show={show} />
      </Modal>
    </>
  );
};

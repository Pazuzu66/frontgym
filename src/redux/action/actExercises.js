import axios from "axios";
import Swal from "sweetalert2";

axios.defaults.baseURL = process.env.REACT_APP_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";

//GET Notes
export const getNotes = async (token) => {
  try {
    const { data } = await axios.get("/exercises/progress", {
      headers: {
        jtoken: token,
      },
    });
    data.map((note) => {
      const d = new Date(note.date);
      note.date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    });
    return data;
  } catch (error) {
    console.log(error.response.data);
  }
};
//Add new Gym Note
export const addNote = async (token = "", objectNote = {}) => {
  const { exercise, weight, repetitions, note } = objectNote;
  try {
    await axios.post("/exercises/progress/", {
      date: "2022/08/26",
      exercise: exercise,
      weight: weight,
      repetitions: repetitions,
      note: note,
    }, {
      headers: {
        jtoken: token
      }
    });

    return Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se agregó tu nota',
      timer: 1000
    })
  } catch (error) {
    console.log(error.response.data);
  }
};

//Edit note
export const editNote = async (token = "", objectNote = {}) => {
  try {
    console.log('ola');
    // const { uid, exercise, date, weight, repetitions, note } = objectNote;
    // const response = await axios.put(`/exercises/progress/${uid}`, {
    //   date: date,
    //   exercise: exercise,
    //   weight: weight,
    //   repetitions: repetitions,
    //   note: note
    // });
    // return response;
  } catch (error) {
    return error.response;
  }
}

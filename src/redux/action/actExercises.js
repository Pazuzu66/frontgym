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
    // eslint-disable-next-line
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
    const { uid, exercise, weight, repetitions, note } = objectNote;        
    const response = await axios.put(`/exercises/progress/${uid}`, {      
      exercise: exercise,
      weight: weight,
      repetitions: repetitions,
      note: note
    },{
      headers:{
        jtoken:token
      }
    });
    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
}
//Delete note
export const deleteNote =  (token = "", uid = "") => {
  try {
    Swal.fire({
      title:"¿Estás Seguro?",
      text: "Esta acción no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    }).then( async (result) => {
      if(result.isConfirmed){
        try {
          await axios.delete(`/exercises/progress/${uid}`,{
            headers:{
              jtoken: token
            }
          }).then((response) => {
            Swal.fire(
              'Eliminado!',
              'Nota Eliminada.',
              'success'
            )
          })
        } catch (error) {
          Swal.fire(
            'Error!',
            'No se pudo eliminar!',
            'danger'
          )       
        }    
      }
    });    
  } catch (error) {
    return error.response;
  }
}

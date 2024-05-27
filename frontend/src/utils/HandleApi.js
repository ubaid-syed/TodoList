import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllToDo = (setToDo) => {
  axios
    .get(baseUrl)
    .then((response) => {
      console.log("data --->", response.data);
      setToDo(response.data); // Assuming response.data contains the array of to-dos
    })
    .catch((error) => {
      console.error("Error fetching to-dos:", error);
    });
};

const addToDo = (text, setText, setToDo) => {
  axios.post(`${baseUrl}/save`, { text }).then((data) => {
    console.log(data);
    setText("");
    getAllToDo(setToDo);
  });
};

const updateTodo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios.post(`${baseUrl}/update`, { _id: toDoId, text }).then((data) => {
    setText("");
    setIsUpdating(false);
    getAllToDo(setToDo);
  });
};

const deleteTodo = (_id, setToDo) => {
  axios.post(`${baseUrl}/delete`, { _id }).then((data) => {
    getAllToDo(setToDo);
  });
};

export { getAllToDo, addToDo, updateTodo, deleteTodo };

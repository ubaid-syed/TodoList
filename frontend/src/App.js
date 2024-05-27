import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, deleteTodo, getAllToDo, updateTodo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  const handleAddOrUpdate = () => {
    if (text.trim() === "") {
      return; // If the input is empty, return without adding or updating
    }
    if (isUpdating) {
      updateTodo(toDoId, text, setToDo, setText, setIsUpdating);
    } else {
      addToDo(text, setText, setToDo);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo Lists</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add toDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="add" onClick={handleAddOrUpdate}>
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteTodo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

// me
// import { useEffect, useState } from "react";
// import ToDo from "./components/ToDo";
// import { addToDo, deleteTodo, getAllToDo, updateTodo } from "./utils/HandleApi";

// function App() {
//   const [toDo, setToDo] = useState([]);
//   const [text, setText] = useState("");
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [toDoId, setToDoId] = useState("");

//   useEffect(() => {
//     getAllToDo(setToDo);
//   }, []);

//   const updateMode = (_id, text) => {
//     setIsUpdating(true);
//     setText(text);
//     setToDoId(_id);
//   };

//   return (
//     <div className="App">
//       <div className="container">
//         <h1>ToDo Lists</h1>
//         <div className="top">
//           <input
//             type="text"
//             placeholder="Add toDos..."
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />

//           <div
//             className="add"
//             onClick={
//               isUpdating
//                 ? () =>
//                     updateTodo(toDoId, text, setToDo, setText, setIsUpdating)
//                 : () => addToDo(text, setText, setToDo)
//             }
//           >
//             {isUpdating ? "Update" : "Add"}
//           </div>
//         </div>
//         <div className="list">
//           {toDo.map((item) => (
//             <ToDo
//               key={item._id}
//               text={item.text}
//               updateMode={() => updateMode(item._id, item.text)}
//               deleteToDo={() => deleteTodo(item._id, setToDo)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

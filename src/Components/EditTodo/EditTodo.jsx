import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { todoContext } from "../Contexts/TodoContexts";

const EditTodo = () => {
  const { taskToEdit, saveTask } = useContext(todoContext);
  const [newEditItem, setNewEditItem] = useState(taskToEdit);
  const navigate = useNavigate();
  useEffect(() => {
    setNewEditItem(taskToEdit);
  }, [taskToEdit]);

  function handleEditInp(e) {
    let newTask = {
      ...newEditItem,
      task: e.target.value,
    };
    setNewEditItem(newTask);
  }
  function save() {
    saveTask(newEditItem);
    navigate("/");
  }
  return (
    <div>
      {newEditItem ? (
        <>
          <input
            onChange={handleEditInp}
            value={newEditItem.task}
            type="text"
          />
          <button onClick={save}>Save</button>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default EditTodo;

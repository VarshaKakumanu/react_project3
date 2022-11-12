import React, { useState } from "react";
import TodoList from './TodoList'

const Contact = () => {
  const [task, setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log(task)
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  const deleteHandler = (ivalue) =>{
    const newTodos= todos.filter((todo,i) =>i!== ivalue )
    setTodos(newTodos);
  }

  return (
    <div>
      PLease contact US!!
      <center>
        <from onSubmit={submitHandler}>
          <h1>To-Do list</h1>
          <input type="text" name="task" value={task} onChange={changeHandler}
          ></input>
          <br />
          <input type="submit" value="Add" name="add"></input>
        </from>
        <TodoList todolist={todos} deleteHandler={deleteHandler} />
      </center>
    </div>
  );
};

export default Contact;

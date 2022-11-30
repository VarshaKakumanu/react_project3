import React, { useState } from "react";
import TodoList from './TodoList'

const Contact = () => {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const changeHandler = e => {
    setTask(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault();
    //console.log(task)
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  const deleteHandler = (indexvalue) =>{
    const newTodos= todos.filter((todo,index) =>index !== indexvalue )
    setTodos(newTodos);
  }

  return (
    <div>
      PLease contact US!!
      <center>
      <h1>To-Do list</h1>
        <from onSubmit={submitHandler}>
         <input type="text" name="task" value={task} onChange={changeHandler} />
          <br />
          <input type="submit" value="Add" name="add" />
        </from>
        <TodoList todolist={todos} deleteHandler={deleteHandler} />
      </center>
    </div>
  );
};

export default Contact;

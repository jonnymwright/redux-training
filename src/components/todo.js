import React from "react";

const Todo = ({ onClick, completed, text }) => (
  <li className={completed ? "done" : ""} onClick={onClick}>
    {text}
  </li>
);

export default Todo;

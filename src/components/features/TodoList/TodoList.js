import React from 'react'
import './TodoList.scss';

const TodoList = ({ title }) => (
  <div className="todo-list">
    <h3 className="title">{title}</h3>
  </div>
);

export default TodoList;

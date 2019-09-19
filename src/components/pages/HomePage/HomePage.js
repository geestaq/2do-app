import React from 'react';
import TodoListCollection from '../../features/TodoListCollection/TodoListCollection';

const todoscollection = [
  {
    title: "test1",
  },
  {
    title: "test2",
  },
  {
    title: "test3",
  },
];

const HomePage = () => (
  <div>
    <h1>TODO Lists</h1>
    <TodoListCollection items={todoscollection} />
  </div>
);

export default HomePage;

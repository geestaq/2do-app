import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout/MainLayout'
import TodoForm from './components/features/TodoForm/TodoFormContainer'
//importowanie routow
import Home from './components/pages/HomePage/HomePage';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <TodoForm />
    </MainLayout>
  );
}

export default App;

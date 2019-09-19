import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout/MainLayout'
//importowanie routow
import Home from './components/pages/HomePage/HomePage';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </MainLayout>
  );
}

export default App;

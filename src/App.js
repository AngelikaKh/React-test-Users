import React from 'react';
import List from './components/List';
import Detail from './components/Detail';
import { Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
      <div>
          <Switch>
              <Route exact path='/'  component={List} />
              <Route path='/users/:id' component={Detail} />
          </Switch>
      </div>
  );
}

export default App;

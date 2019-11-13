import React from "react";
import "./App.css";

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './Store';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Create from './Pages/Create';
import Paises from './Pages/Paises';


function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="container">
      <div className="row">
        <Switch>
          <Route
            path="/Home"
            component={Home} />
          <Route
            exact
            path="/Login"
            render={() => <Login />}/>
          <Route
            exact
            path="/Create"
            render={() => <Create />} />
            <Route
            exact
            path="/Paises"
            render={() => <Paises />} />
        </Switch>
    </div>
    </div>
    </Provider>
  </BrowserRouter>
  );
}

export default App;

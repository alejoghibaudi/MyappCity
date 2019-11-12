import React from "react";
import "./App.css";
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Create from './Pages/Create';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <div className="row">
      <Redirect
          from="/"
          to="/Home" />
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
        </Switch>
    </div>
    </div>
  </BrowserRouter>
  );
}

export default App;

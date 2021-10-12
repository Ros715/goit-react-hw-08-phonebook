import React, { /*useState,*/ useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Register from "./components/Register/Register.js";
import Login from "./components/Login/Login.js";
import Contacts from "./components/Contacts/Contacts.js";
import "./App.css";
import { Switch, Route, BrowserRouter, NavLink, Link } from "react-router-dom";
import { /*useSelector,*/ useDispatch, connect } from "react-redux";
import * as contactsOperations from "./redux/operations";

function App() {
  const dispatch = useDispatch();

  const onRegister = (email, name, password) => {
    dispatch(contactsOperations.register({ name, email, password }));
  };

  const onLogin = (email, password) => {
    dispatch(contactsOperations.login({ name: "", email, password }));
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/register">
            <Register onSubmit={onRegister} />
          </Route>
          <Route path="/login">
            <Login onSubmit={onLogin} />
          </Route>
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

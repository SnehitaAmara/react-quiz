import React from 'react';
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Profile from './Profile'
import Quiz from './Quiz'

import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

import { useState, useEffect } from "react";
import { getUser, getToken, setUserSession, resetUserSession } from "./service/AuthService";
import axios from "axios";

const verifyTokenAPIURL = 'https://mn90o3a1vi.execute-api.ap-south-1.amazonaws.com/prod/verify';


function App() {

  const [isAuthenicating, setAuthenicating] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (token === 'undefined' || token === undefined || token === null || !token) {
      return;
    }

   const requestConfig = {
      headers: {
        'x-api-key': 'HMLcsLasf02KEikMwizyu1zw92ipu5I18VCSNaDb'
      }
    }
    const requestBody = {
      user: getUser(),
      token: token
    }

    axios.post(verifyTokenAPIURL, requestBody, requestConfig).then(response => {
      setUserSession(response.data.user, response.data.token);
      setAuthenicating(false);
    }).catch(() => {
      resetUserSession();
      setAuthenicating(false);
    })
  }, []);

  const token = getToken();
  if (isAuthenicating && token) {
    return <div className="content">Authenicating...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
      <div className="header">
        <NavLink to = "/">Home</NavLink>
        <NavLink to = "/register">Register</NavLink>
        <NavLink to = "/login">Login</NavLink>
        <NavLink to = "/profile">Profile</NavLink>
        <NavLink activeClassName = "active" to = "/quiz">Quiz</NavLink>
      </div>
      <div className="content">
        <Switch>
            <Route exact path="/" component={Home}/>
            <PublicRoute path="/register" component={Register}/>
            <PublicRoute path="/login" component={Login}/>
            <PrivateRoute path="/profile" component={Profile}/>
            <PrivateRoute path="/quiz" component={Quiz}/>
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

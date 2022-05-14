import React from 'react';
import { getUser, resetUserSession } from './service/AuthService';
import './styles/extra.css';
const Quiz = (props) => {
  const user = getUser();
  const name = user !== 'undefined' && user ? user.name : '';

  const logoutHandler = () => {
    resetUserSession();
    props.history.push('login');
  }
  return (
    <div className="backgrd">
      <h1> Take the Quiz </h1>
      <h1><input type="button" class="button" value="Take Quiz >>" align="center"></input> </h1>

      <h1> Update the Quiz (ADMIN) </h1>
      <h1><input type="button" class="button" value="Admin login >>" align="center"></input> </h1>

    </div>

  )
}

export default Quiz;
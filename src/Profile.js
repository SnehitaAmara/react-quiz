import React from 'react';
import { getUser, resetUserSession } from './service/AuthService';
import './styles/extra.css';
const Profile = (props) => {
  const user = getUser();
  const name = user !== 'undefined' && user ? user.name : '';

  const logoutHandler = () => {
    resetUserSession();
    props.history.push('login');
  }
  return (
    <div>
      <div className="backgrd">
        <h1> Welcome to Profile Page !!</h1>

      </div>
      <div className="textright">
      You are logged in!!!!
      </div>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="nothing" height="200px" width="200px" className='center'></img>
      <div className="textright">
      Name :- <b>{name}</b> <br/>
      Your Current Score is :- 0 <br />
      <input type="button" value="Logout" onClick={logoutHandler} />
      </div>
    </div>
  )
}

export default Profile;
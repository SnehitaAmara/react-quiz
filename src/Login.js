import React, {useState} from 'react';
import axios from 'axios';
import './styles/extra.css';
import { setUserSession } from './service/AuthService'
const loginAPIUrl = 'https://mn90o3a1vi.execute-api.ap-south-1.amazonaws.com/prod/login';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Both username and password are required');
      return;
    }
    setErrorMessage(null);
    const requestConfig = {
      headers: {
        'x-api-key': 'HMLcsLasf02KEikMwizyu1zw92ipu5I18VCSNaDb'
      }
    }
    const requestBody = {
      username: username,
      password: password
    }

    axios.post(loginAPIUrl, requestBody, requestConfig).then((response) => {
      setUserSession(response.data.user, response.data.token);
      props.history.push('/profile');
    }).catch((error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Sorry....The backend server is down. Please try again later!!');
      }
    })
  }

  return (
    <div className="backgrd">
      <form onSubmit={submitHandler} align="center">
        <h1 text-align="center">Login</h1>
        Username: <input type="text" value={username} onChange={event => setUsername(event.target.value)} /> <br/>
        Password: <input type="password" value={password} onChange={event => setPassword(event.target.value)} /> <br/>
        <input type="submit" value="Login" />
      </form>
      {errorMessage && <p className="message">{errorMessage}</p>}
    </div>
  )
}

export default Login;
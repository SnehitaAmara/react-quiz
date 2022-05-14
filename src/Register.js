import React, {useState} from 'react';
import axios from 'axios';
import './styles/extra.css';
const registerUrl = 'https://mn90o3a1vi.execute-api.ap-south-1.amazonaws.com/prod/register';

const Register = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState(null);

    const submitHandler = (event) => {
        event.preventDefault();
        if(username.trim()==='' || email.trim()==='' || name.trim()==='' || password.trim()===''){
            setMessage('All fields are required');
            return;
        }

        const requestConfig = {
            headers: {
                'x-api-key': 'HMLcsLasf02KEikMwizyu1zw92ipu5I18VCSNaDb'
            }
        }

        const requestBody = {
            username: username,
            email: email,
            name: name,
            password: password
        }

        axios.post(registerUrl, requestBody, requestConfig).then(response => {
            setMessage('Registration Successful');
        }).catch(error => {
            if(error.response.status === 401 || error.response.status === 403){
                setMessage(error.response.data.message);
            }
            else {
                setMessage('Sorry...The backend server is down!! Please try again later.');
            }
        })
    }

    return (
        <div className="backgrd">
            <form onSubmit={submitHandler} align="center">
                <h1>Register</h1>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name: <input type="text" value={name} onChange={event => setName(event.target.value)}/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: <input type="text" value={email} onChange={event => setEmail(event.target.value)}/><br/>
                Username: <input type="text" value={username} onChange={event => setUsername(event.target.value)}/><br/>
                Password: <input type="password" value={password} onChange={event => setPassword(event.target.value)}/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" value="Register" /><br/>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    )
}

export default Register;
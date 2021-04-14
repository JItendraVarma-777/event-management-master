import React from 'react';
import '../css/login.css';


import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginAction from '../../actions/LoginAction';
import LoginModel from '../../models/loginmodel';
import {} from '../css/registerUser.css';
import { Form, Table, Jumbotron, Button } from 'react-bootstrap'


let dispatch;
let history;
let username; 
let password;

 
export const Login = (props) =>{
    dispatch = useDispatch();
    history = useHistory();


        return <div>
            <Form onSubmit={handleSubmit}>
            <div class="topnav">
                
                <a href="/login">Admin</a>
                <a href="#">Registration</a>
                <a href="#">Contact us</a>
                <a href="#">About us</a>
                <a class="active" href="/">Home</a>
  
            </div> 




        <div id="class1">   

            <div class="imgcontainer">
                
                
             </div>
            <p>LOGIN</p>
            <div class="container">
            

                <div class="position">
                <label for="uname"><b>Username</b></label>
                <br></br>
                <input type="text" placeholder="Enter Username" name="uname" required/>
                <br></br>

                <label for="psw"><b>Password</b></label>
                <br></br>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                <br></br>

                <button type="submit">Login</button>
                
                <br></br>
                <a href="/">Cancel</a>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
            </div>
                
        
        </div>
        </Form>
        </div>
        
}

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const emailId = data.get('Username');
    const password = data.get('Password');
    
    const userObj = new LoginModel(username, password);
    dispatch(LoginAction(userObj)).then(response => {
        alert("Login Successful!!");
        history.push('/welcome');
     })
     .catch(error => {
        alert("Invalid Email Or Password!");
        return Promise.reject(error.response)
     });;
    
}


export default Login;
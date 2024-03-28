import { useState } from 'react';
import './App.css';

// import logo from ""
function App() {
  const [login, setlogin]=useState(true);

  const loginSwitch=()=>{
    setlogin(!login)
  }
  return (
    <div id='container'>
      <div id='user'>
        <img src="https://www.vhv.rs/dpng/d/0-104_instagram-logo-hd-png-download.png" alt="Instagram Logo" /> 
        <input hidden={login} type="text" name='' placeholder='Mobile Number or Email' id=''/>      
        <input hidden={login} type="text" name='' placeholder='Full Name' id=''/>      
        <input type="email" name="" id="" placeholder='Phonenumber, Username or Email' />      
        <input type="text" name="" id="" placeholder='Password' />
        <button>{login?"Sign In":"Sign Up"}</button>
      </div>
      <div id='footer'>
      {login?"Don't have account?":"have an account?"} <span onClick={loginSwitch}>{login?"Sign up":"Log in"}</span>
      </div>
    </div>
  );
}

export default App;

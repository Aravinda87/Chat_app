import React from 'react'
import logo from '/messaging.png'
import './myStyles.css';
import { Button, TextField  } from '@mui/material'

function Login() {
  return (
    <div className='login-container'>
        <div className='image-container'>
            <img src={logo} alt="logo" className='welcome-logo'/>
        </div>
        <div className='login-box'>
            <p className='logintext'>login to your account </p>
            <TextField id="standard-basic" label="enter user name" variant="outlined" />
            <TextField id="outlined-basic" label="password" variant="outlined" />
            <Button variant="outlined">login</Button>
        </div>
    </div>
  )
}

export default Login
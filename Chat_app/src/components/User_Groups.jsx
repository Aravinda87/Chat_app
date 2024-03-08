import React from 'react'
import './myStyles.css';
import { IconButton } from '@mui/material';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import logo from '/messaging.png'


function User_Groups() {
  return (
    <div className='list-container'>
        <div className='ug-header'>
            <img 
                src={logo}
                style={{height:"2rem",width:"2rem",padding:"0px 10px"}}
            />
            <p className='ug-title'>online users</p>

        </div>
        <div className='sb-search'>
            <IconButton>
                <SearchSharpIcon/>
            </IconButton>
            <input placeholder='search' className='search-box'/>
        </div>
        <div className='ug-list'>
            <div className='list-tem'>
                <p className='con-icon'>t</p>
                <p className='con-title'>test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>t</p>
                <p className='con-title'>test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>t</p>
                <p className='con-title'>test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>t</p>
                <p className='con-title'>test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>t</p>
                <p className='con-title'>test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>t</p>
                <p className='con-title'>test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>t</p>
                <p className='con-title'>test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>t</p>
                <p className='con-title'>test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>t</p>
                <p className='con-title'>test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>t</p>
                <p className='con-title'>test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>t</p>
                <p className='con-title'>test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>t</p>
                <p className='con-title'>test user</p>
            </div>
        </div>
    </div>
  )
}

export default User_Groups
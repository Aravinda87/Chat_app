import { IconButton } from '@mui/material'
import React from 'react'
import './myStyles.css';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

function ChatArea({props}) {
  return (
    <div className='chatarea-container'>

        <div className='chatArea-header'>
            <p className='con-icon'>{props.name[0]}</p>
            <div className='header-text'>
                <p className='con-title'>{props.name}</p>
                <p className='con-timestamp'>{props.timestamp}</p>
            </div>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </div>

        <div className='messages-container'>messages-container</div>

        <div className='text-input-area'>
            <input placeholder='type a message' className='search-box' />
            <IconButton>
              <SendIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default ChatArea
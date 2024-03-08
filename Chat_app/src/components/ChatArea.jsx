import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import './myStyles.css';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';

function ChatArea() {
  const [conversations,setconversation] = useState([
    {
        name : "Test1",
        lastmessage : "lastmessage 1",
        timestamp : "today"
    },
    {
        name : "Test2",
        lastmessage : "lastmessage 2",
        timestamp : "today"
    },
    {
        name : "Test3",
        lastmessage : "lastmessage 3",
        timestamp : "today"
    },
])

const props = conversations[0];
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

        <div className='messages-container'>
          <MessageOthers/>
          <MessageSelf/>
          <MessageOthers/>
          <MessageSelf/>
          <MessageOthers/>
          <MessageSelf/>
          <MessageOthers/>
          <MessageSelf/>
          <MessageOthers/>
          <MessageSelf/>
          <MessageOthers/>
          <MessageSelf/>
        </div>

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
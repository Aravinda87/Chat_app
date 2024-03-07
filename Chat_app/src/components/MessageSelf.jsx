import React from 'react'

function MessageSelf() {
    var props2 = {
        name : "you",
        message : "this is a simple message"
    }
  return (
    <div className='self-message-container'>
        <div className='messagebox'>
            <p>{props2.message}</p>
            <p className='self-timestamp'>12:00am</p>
        </div>
    </div>
  )
}

export default MessageSelf
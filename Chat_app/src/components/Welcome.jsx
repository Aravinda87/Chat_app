import React from 'react'
import logo from '/messaging.png'

function Welcome() {
  return (
    <div className='welcome-container'>
        <img src={logo} alt='logo' className='welcome-logo' />
        <p>view and text directly to people present in the chat room </p>
    </div>
  )
}

export default Welcome
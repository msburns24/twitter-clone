import React from 'react'
import gear from "../../images/gear.svg"
import mailNew from '../../images/mail-new.svg'

function MessagesList() {
  return (
    <ul id='MessagesList'>
      <div className="MessageList__header">
        <h1 className="MessageList__pagetitle">Messages</h1>
        <div className='MessageList__actions'>
          <img src={gear} alt="settings" className='icon-20' />
          <img src={mailNew} alt="new message" className='icon-20' />
        </div>
      </div>

      
    </ul>
  )
}

export default MessagesList
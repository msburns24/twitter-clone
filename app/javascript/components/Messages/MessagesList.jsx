import React from 'react'
import gear from "../../images/gear.svg"
import mailNew from '../../images/mail-new.svg'
import MessagePreview from './MessagePreview'

function MessagesList({ messageListArray }) {
  

  return (
    <ul id='MessagesList'>
      <div className="MessageList__header">
        <h1 className="MessageList__pagetitle">Messages</h1>
        <div className='MessageList__actions'>
          <img src={gear} alt="settings" className='icon-20' />
          <img src={mailNew} alt="new message" className='icon-20' />
        </div>
      </div>

      {/* Show list of messages */}
      <div className="MessageList__list">
        {messageListArray.map((messageObject) => {
          return <MessagePreview key={messageObject.id} messageObject={messageObject} />
        })}
      </div>
    </ul>
  )
}

export default MessagesList
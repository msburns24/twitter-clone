import React from 'react'
import profilePrimaryColor from '../../images/profile-primarycolor.svg'

function MessageViewPane({ messageObject }) {
  return (
    <div id='MessageViewPane'>
      <div className="MessageViewPane__header">
        <div className="MessageViewPane__header__left">
          <div className='MessageViewPane__header__left__profilePic'>
            <img src={profilePrimaryColor} alt='Sender Profile Picture' className='ProfilePicXSm' />
          </div>
          <div className='MessageViewPane__header__left__senderName'>{messageObject.senderName}</div>
        </div>
      </div>

      <div className="MessageViewPane__body">
        <div className="MessageViewPane__body__message receivedMessage">
          <div className="MessageViewPane__body__message__text">
            {messageObject.fullMessage}
          </div>
          <div className="MessageViewPane__body__message__date">
            {messageObject.date}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageViewPane
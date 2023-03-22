import React from 'react'
import profilePrimaryColor from '../../images/profile-primarycolor.svg'
import sendArrowRight from '../../images/send-arrow-right.svg'

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

      {/* Box to send a reply */}
      <div className="MessageViewPane__footer">
        <div className="MessageViewPane__replyContainer">
          <div className="MessageViewPane__replyContainer__replyBox">
            <input type="text" placeholder="Reply..." className='MessageViewPane__replyContainer__input' />
          </div>
          
          <img src={sendArrowRight} alt='Send Reply' className='MessageViewPane__replyContainer__sendBtn' />
        </div>
      </div>
    </div>
  )
}

export default MessageViewPane
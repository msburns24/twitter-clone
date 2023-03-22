import React from 'react'
import profilePrimaryColor from '../../images/profile-primarycolor.svg'

function MessagePreview({ messageObject }) {
  // const dummyMsgSampleObj = {
  //   id: 1,
  //   senderName: 'John Doe',
  //   senderHandle: '@johndoe',
  //   preview: 'Hello, how are you?',
  //   date: "Mar 22"
  // }

  // Test
  return (
    <li className='MessagePreview'>
      <div className='MessagePreview__left'>
        <img src={profilePrimaryColor} alt='Profile Picture' className='ProfilePicSm MsgProfilePic' />
      </div>

      <div className='MessagePreview__right'>
        <div className='Message__header'>
          <div className='Message__senderName'>{messageObject.senderName}</div>
          <div className='Message__senderHandle'>{messageObject.senderHandle}</div>
          <div className='Message__date'>· {messageObject.date}</div>
        </div>

        <div className='Message__preview'>{messageObject.preview}</div>
      </div>
    </li>
  )
}

export default MessagePreview
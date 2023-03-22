import React from 'react'

function MessagePreview({ messageObject }) {
  // const dummyMsgSampleObj = {
  //   id: 1,
  //   senderName: 'John Doe',
  //   senderHandle: '@johndoe',
  //   preview: 'Hello, how are you?',
  //   date: "Mar 22"
  // }

  return (
    <li className='Message'>
      <div className='Message__header'>
        <div className='Message__senderName'>{messageObject.senderName}</div>
        <div className='Message__senderHandle'>{messageObject.senderHandle}</div>
        <div className='Message__date'>{messageObject.date}</div>
      </div>

      <div className='Message__preview'>{messageObject.preview}</div>
    </li>
  )
}

export default MessagePreview
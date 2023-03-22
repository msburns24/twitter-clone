import React from 'react'
import gear from "../../images/gear.svg"
import mailNew from '../../images/mail-new.svg'
import MessagePreview from './MessagePreview'

function MessagesList() {
  const dummyMsgSampleObj = {
    id: 1,
    senderName: 'John Doe',
    senderHandle: '@johndoe',
    preview: 'Hello, how are you?',
    date: "Mar 22"
  }

  let dummyMsgList = []
  for (let i = 0; i < 20; i++) {
    dummyMsgList.push({
      id: i,
      senderName: dummyMsgSampleObj.senderName,
      senderHandle: dummyMsgSampleObj.senderHandle,
      preview: dummyMsgSampleObj.preview,
      date: dummyMsgSampleObj.date
    })
  }

  return (
    <ul id='MessagesList'>
      <div className="MessageList__header">
        <h1 className="MessageList__pagetitle">Messages</h1>
        <div className='MessageList__actions'>
          <img src={gear} alt="settings" className='icon-20' />
          <img src={mailNew} alt="new message" className='icon-20' />
        </div>
      </div>

      {dummyMsgList.map((messageObject) => {
        return <MessagePreview key={messageObject.id} messageObject={messageObject} />
      })}
    </ul>
  )
}

export default MessagesList
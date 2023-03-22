import React from 'react'
import Sidebar from '../shared/Sidebar/Sidebar'
import MessagesList from './MessagesList'
import MessageViewPane from './MessageViewPane'

function Messages() {
  const dummyMsgSampleObj = {
    senderName: 'John Doe',
    senderHandle: '@johndoe',
    preview: 'Hello, how are you? I have a question...',
    fullMessage: 'Hello, how are you? I have a question that I would like to ask you. I am trying to figure out how to do something and I am not sure how to do it. Can you help me?',
    date: "Mar 22"
  }

  let dummyMsgList = []
  for (let i = 0; i < 20; i++) {
    dummyMsgList.push({
      id: i,
      ...dummyMsgSampleObj
    })
  }

  return (
    <div id='Messages'>
      <Sidebar />
      <MessagesList messageListArray={dummyMsgList} />
      <MessageViewPane messageObject={dummyMsgList[0]} />
    </div>
  )
}

export default Messages
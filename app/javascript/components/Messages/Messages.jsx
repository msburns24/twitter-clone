import React from 'react'
import Sidebar from '../shared/Sidebar/Sidebar'
import MessagesList from './MessagesList'
import MessageViewPane from './MessageViewPane'

function Messages() {
  return (
    <div id='Messages'>
      <Sidebar />
      <MessagesList />
      <MessageViewPane />
    </div>
  )
}

export default Messages
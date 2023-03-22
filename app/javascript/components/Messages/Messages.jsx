import React from 'react'
import Sidebar from '../shared/Sidebar/Sidebar'
import MessagesList from './MessagesList'
import MessageView from './MessageView'

function Messages() {
  return (
    <div id='Messages'>
      <Sidebar />
      <MessagesList />
      <MessageView />
    </div>
  )
}

export default Messages
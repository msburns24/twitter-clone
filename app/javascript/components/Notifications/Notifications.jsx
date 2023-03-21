import React from 'react'
import Sidebar from '../shared/Sidebar/Sidebar'
import NotificationsPane from './NotificationsPane'
import Suggestions from '../shared/Suggestions/Suggestions'

function Notifications() {
  return (
    <div id='Notifications'>
      <Sidebar />
      <NotificationsPane />
      <Suggestions />
    </div>
  )
}

export default Notifications
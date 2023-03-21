import React from 'react'
import NotificationsList from './NotificationsList'

function NotificationsPane() {
  return (
    <div id='NotificationsPane' className='pane-middle'>
      <h1 className='pageTitle'>Notifications</h1>
      <NotificationsList />
    </div>
  )
}

export default NotificationsPane
import React, { useState } from 'react'
import Notification from './Notification'

function NotificationsList() {
  [notificationsArray, setNotificationsArray] = useState([
    { id: 1, title: 'Notification 1' },
    { id: 2, title: 'Notification 2' },
    { id: 3, title: 'Notification 3' },
    { id: 4, title: 'Notification 4' },
    { id: 5, title: 'Notification 5' },
  ])

  return (
    <ul id='NotificationsList'>
      {notificationsArray.map((notificationsItem) => (
        <Notification notificationsItem={notificationsItem} />
      ))}
    </ul>
  )
}

export default NotificationsList
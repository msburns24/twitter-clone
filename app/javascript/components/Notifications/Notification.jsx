import React from 'react'

function Notification({notificationsItem}) {
  return (
    <li key={notificationsItem.id} className='Notification'>
      {notificationsItem.title}
    </li>
  )
}

export default Notification
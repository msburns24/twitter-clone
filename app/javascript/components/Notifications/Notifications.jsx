import React from 'react'
import Sidebar from '../shared/Sidebar/Sidebar'
import Suggestions from '../shared/Suggestions/Suggestions'

function Notifications() {
  return (
    <div id='Notifications'>
      <Sidebar />
      <div id='NotificationsPane' className='pane-middle'>Hey</div>
      <Suggestions />
    </div>
  )
}

export default Notifications
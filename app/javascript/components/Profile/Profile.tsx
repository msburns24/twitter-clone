import React from 'react'
import Sidebar from '../shared/Sidebar/Sidebar'

function Profile() {
  return (
    <div id='Profile'>
      <Sidebar />
      <div className='pane-middle'>Middle Item</div>
      <div className='pane-right'>Right Item</div>
    </div>
  )
}

export default Profile
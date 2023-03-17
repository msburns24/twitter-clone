import React from 'react'
import Sidebar from '../shared/Sidebar/Sidebar'
import ProfilePane from './ProfilePane'
import Suggestions from '../shared/Suggestions/Suggestions'

function Profile() {
  return (
    <div id='Profile'>
      <Sidebar />
      <ProfilePane />
      <Suggestions />
    </div>
  )
}

export default Profile
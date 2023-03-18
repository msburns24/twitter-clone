import React from 'react'
import ProfilePaneHeader from './ProfilePaneHeader'
import ProfileBody from './ProfileBody'

function ProfilePane() {
  return (
    <div className='pane-middle'>
      <ProfilePaneHeader />
      <ProfileBody />
    </div>
  )
}

export default ProfilePane
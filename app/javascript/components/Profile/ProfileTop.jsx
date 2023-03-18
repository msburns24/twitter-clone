import React from 'react'
import ProfilePicMed from '../shared/ProfilePicMed'

function ProfileTop() {
  return (
    <div className='ProfileTop'>
      <div className='ProfileTop__Left'>
        <ProfilePicMed />
      </div>

      <div className='ProfileTop__Right'>
        <div className='editProfileBtn'>Edit Profile</div>
      </div>
    </div>
  )
}

export default ProfileTop
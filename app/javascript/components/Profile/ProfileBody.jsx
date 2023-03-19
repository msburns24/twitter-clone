import React from 'react'
import profileBanner from "../../images/profile-banner.png"
import ProfileTop from './ProfileTop'
import ProfileBody__UserInfo from './ProfileBody__UserInfo'
import ProfileTabs from './ProfileTabs'

function ProfileBody() {
  return (
    <div className='ProfileBody'>
      <img src={profileBanner} alt="profile banner" className='profile-banner' />
      <ProfileTop />
      <ProfileBody__UserInfo />
      <ProfileTabs />
    </div>
  )
}

export default ProfileBody
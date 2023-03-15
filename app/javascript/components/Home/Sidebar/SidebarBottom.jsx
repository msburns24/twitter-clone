import React from 'react'
import profilePic from '../../../images/profile-pic.jpg'

function SidebarBottom() {
  return (
    <div id='SidebarBottom'>
      <img src={profilePic} alt='Profile Pic' id='SidebarProfilePic' />
      <div id='SidebarProfileInfo'>
        <h3 id='SidebarName'>Matt</h3>
        <div id='SidebarUsername'>@msburns24</div>
      </div>
    </div>
  )
}

export default SidebarBottom
import React from 'react'
import ProfilePicSm from '../../shared/ProfilePicSm'

function SidebarBottom() {
  return (
    <div id='SidebarBottom'>
      <ProfilePicSm />
      <div id='SidebarProfileInfo'>
        <h3 id='SidebarName'>Matt</h3>
        <div id='SidebarUsername'>@msburns24</div>
      </div>
    </div>
  )
}

export default SidebarBottom
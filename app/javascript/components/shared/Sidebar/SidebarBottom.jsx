import React from 'react'
import ProfilePicSm from '../../shared/ProfilePicSm'

function SidebarBottom() {
  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": document.querySelector('[name="csrf-token"]').content
      }
    }).then(response => console.log("successfully logged out"))
  }

  // DELETE /logout

  return (
    <div id='SidebarBottom'>
      <ProfilePicSm />
      <div id='SidebarProfileInfo'>
        <h3 id='SidebarName'>Matt</h3>
        <div id='SidebarUsername'>@msburns24</div>
        <a onClick={handleLogout} style={{
          fontSize: "12px",
          userSelect: "none",
          cursor: "pointer"
          }}>Logout</a>
      </div>
    </div>
  )
}

export default SidebarBottom
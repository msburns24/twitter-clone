import React from 'react'

function SidebarTop__Link({ linkInfoObj }) {
  return (
    <div class='SidebarTop__Link'>
      <img src={linkInfoObj.icon} className='SidebarLinkIcon' />
      <div className='SidebarLinkLabel'>
        {linkInfoObj.label}
      </div>
    </div>
  )
}

export default SidebarTop__Link
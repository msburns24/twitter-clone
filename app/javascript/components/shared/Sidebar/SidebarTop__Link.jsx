import React from 'react'
import { Link } from "react-router-dom"

function SidebarTop__Link({ linkInfoObj }) {
  const linkAddress = `/${linkInfoObj.label.toLowerCase()}`

  return (
    <Link to={linkAddress} class='SidebarTop__Link'>
      <img src={linkInfoObj.icon} className='SidebarLinkIcon' />
      <div className='SidebarLinkLabel'>
        {linkInfoObj.label}
      </div>
    </Link>
  )
}

export default SidebarTop__Link
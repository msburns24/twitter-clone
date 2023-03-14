import React from 'react'
import SidebarTop__Link from './SidebarTop__Link'
import sidebarLinkList from '../../../images/index'

function SidebarTop__LinksContainer() {
  
  return (
    <div id='SideBarTop__LinksContainer'>
      {sidebarLinkList.map(linkInfoObj => (
        <SidebarTop__Link linkInfoObj={linkInfoObj} />
      ))}
    </div>
  )
}

export default SidebarTop__LinksContainer
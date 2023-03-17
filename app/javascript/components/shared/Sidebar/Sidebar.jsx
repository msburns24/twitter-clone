import React from 'react'
import SidebarTop from './SidebarTop'
import SidebarBottom from './SidebarBottom'

function Sidebar() {
  return (
    <div id='Sidebar' className='pane-left' >
      <SidebarTop />
      <SidebarBottom />
    </div>
  )
}

export default Sidebar
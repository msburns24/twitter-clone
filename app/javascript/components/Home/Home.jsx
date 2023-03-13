import React from 'react'
import Feed from './Feed/Feed'
import Sidebar from './Sidebar/Sidebar'
import Suggestions from './Suggestions/Suggestions'

function Home() {
  return (
    <div id="Home">
      <Sidebar />
      <Feed />
      <Suggestions />
    </div>
  )
}

export default Home
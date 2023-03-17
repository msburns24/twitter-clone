import React from 'react'
import Sidebar from '../shared/Sidebar/Sidebar'
import Feed from './Feed/Feed'
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
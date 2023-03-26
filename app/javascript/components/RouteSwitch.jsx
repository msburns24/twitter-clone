import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home/Home'
import Profile from './Profile/Profile'
import Notifications from './Notifications/Notifications'
import Messages from './Messages/Messages'

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/explore' element={<h1>Explore</h1>} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/messages' element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch
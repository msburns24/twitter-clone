import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home/Home'
import Profile from './Profile/Profile'

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/explore' element={<h1>Explore</h1>} />
        <Route path='/notifications' element={<h1>Notifications</h1>} />
        <Route path='/messages' element={<h1>Messages</h1>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch
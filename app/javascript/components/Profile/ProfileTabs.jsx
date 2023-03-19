import React from 'react'

function ProfileTabs() {
  return (
    <div className='ProfileTabs'>
      <div className='ProfileTabs__tab'>
        <h3 className='Active'>Tweets</h3>
      </div>
      <div className='ProfileTabs__tab'>
        <h3>Replies</h3>
      </div>
      <div className='ProfileTabs__tab'>
        <h3>Media</h3>
      </div>
      <div className='ProfileTabs__tab'>
        <h3>Likes</h3>
      </div>
    </div>
  )
}

export default ProfileTabs
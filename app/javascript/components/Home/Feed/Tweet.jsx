import React from 'react'
import ProfilePicSm from '../../shared/ProfilePicSm'
import TweetRight from './TweetRight'

function Tweet({ tweetObject, users }) {
  return (
    <div className='Tweet'>
      <ProfilePicSm />
      <TweetRight tweetObject={tweetObject} users={users} />
    </div>
  )
}

export default Tweet
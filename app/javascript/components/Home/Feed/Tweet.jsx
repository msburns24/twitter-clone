import React from 'react'
import ProfilePicSm from '../../shared/ProfilePicSm'
import TweetRight from './TweetRight'

function Tweet({ tweetObject }) {
  return (
    <div className='Tweet'>
      <ProfilePicSm />
      <TweetRight tweetObject={tweetObject} />
    </div>
  )
}

export default Tweet
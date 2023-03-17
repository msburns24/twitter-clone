import React from 'react'
import ProfilePicSm from '../../shared/ProfilePicSm'
import TweetRight from './TweetRight'

function FeedNewTweet() {
  return (
    <div id='FeedNewTweet' className='Tweet'>
      <ProfilePicSm />
      <TweetRight isNewTweet={true} />
    </div>
  )
}

export default FeedNewTweet
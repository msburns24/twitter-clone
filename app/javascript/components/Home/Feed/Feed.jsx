import React from 'react'
import FeedTop from './FeedTop'
import FeedTweets from './FeedTweets'

function Feed() {
  return (
    <div id='Feed' className='pane-middle'>
      <FeedTop />
      <FeedTweets />
    </div>
  )
}

export default Feed
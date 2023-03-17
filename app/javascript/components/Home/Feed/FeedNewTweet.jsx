import React from 'react'
import ProfilePicSm from '../../shared/ProfilePicSm'

function FeedNewTweet() {
  return (
    <div id='FeedNewTweet' className='Tweet'>
      <ProfilePicSm />
      
      <div className='TweetRight' id='newTweetRight'>
        <div className='TweetContent'>
          <input className='TweetContent__input' type='text' placeholder="What's happening?" />
        </div>

        <div className='TweetActions'>
          <div className='TweetActions__left'>[Placeholder for media]</div>
          <div className='TweetActions__right'>
            <button className='TweetActions__right__post'>Tweet</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FeedNewTweet
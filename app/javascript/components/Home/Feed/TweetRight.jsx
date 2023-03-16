import React from 'react'

function TweetRight() {
  return (
    <div className='TweetRight'>
      <div className='TweetRight__authorInfo'>
        <span className='TweetRight__authorInfo__name'>Matt Burns</span>
        <span className='TweetRight__authorInfo__handle'> | @msburns24</span>
        <span className='TweetRight__authorInfo__time'> · 1h</span>
      </div>
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
  )
}

export default TweetRight
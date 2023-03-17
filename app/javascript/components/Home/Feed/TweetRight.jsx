import React from 'react'

function TweetRight({ isNewTweet, text }) {
  let tweetRight = null
  if (isNewTweet) {
    tweetRight = (
      <div className='TweetActions__right'>
        <button className='TweetActions__right__post'>Tweet</button>
      </div>
    )
  } 

  let tweetContent = null
  if (isNewTweet) {
    tweetContent = (
      <div className='TweetContent'>
        <input className='TweetContent__input' type='text' placeholder="What's happening?" />
      </div>
    )
  } else {
    tweetContent = (
      <div className='TweetContent'>
        <span className='TweetContent__text'>{text}</span>
      </div>
    )
  }

  let tweetAuthorInfoClass = 'TweetRight__authorInfo'
  if (isNewTweet) {
    tweetAuthorInfoClass += ' newTweet'
  }

  return (
    <div className='TweetRight'>
      <div className={tweetAuthorInfoClass}>
        <span className='TweetRight__authorInfo__name'>Matt Burns</span>
        <span className='TweetRight__authorInfo__handle'> | @msburns24</span>
        <span className='TweetRight__authorInfo__time'> · 1h</span>
      </div>
      <div className='TweetContent'>
        {tweetContent}
      </div>
      <div className='TweetActions'>
        <div className='TweetActions__left'>[Placeholder for media]</div>
        {tweetRight}
      </div>
    </div>
  )
}

export default TweetRight
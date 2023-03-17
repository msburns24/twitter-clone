import React from 'react'

function TweetRight({ isNewTweet, tweetObject }) {

  const hoursAgo = Math.floor((new Date() - tweetObject.tweetTime) / 1000 / 60 / 60)

  return (
    <div className='TweetRight' id={`tweet-${tweetObject.id}`}>
      <div className='TweetAuthorInfo'>
        <span className='TweetRight__authorInfo__name'>{tweetObject.user.name}</span>
        <span className='TweetRight__authorInfo__handle'> | @{tweetObject.user.handle}</span>
        <span className='TweetRight__authorInfo__time'> · {hoursAgo}h</span>
      </div>

      <div className='TweetContent'>
        <span className='TweetContent__text'>{tweetObject.text}</span>
      </div>

      <div className='TweetActions'>
        <div className='TweetActions__left'>[Placeholder for media]</div>
      </div>
    </div>
  )
}

export default TweetRight
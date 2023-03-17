import React from 'react'

function TweetAuthorInfo({ tweetObject }) {

  const hoursAgo = (() => {
    return Math.floor((new Date() - tweetObject.tweetTime) / 1000 / 60 / 60)
  })()

  return (
    <div className='TweetAuthorInfo'>
      <span className='TweetRight__authorInfo__name'>{tweetObject.user.name}</span>
      <span className='TweetRight__authorInfo__handle'> | @{tweetObject.user.handle}</span>
      <span className='TweetRight__authorInfo__time'> · {hoursAgo}h</span>
    </div>
  )
}

export default TweetAuthorInfo
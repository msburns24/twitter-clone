import React from 'react'

function TweetRight({ isNewTweet, tweetObject, users }) {

  const hoursAgo = Math.floor((new Date() - tweetObject.created_at) / 1000 / 60 / 60)
  const user = users.find(user => user.id === tweetObject.user_id)

  console.log(users)

  return (
    <div className='TweetRight' id={`tweet-${tweetObject.id}`}>
      <div className='TweetAuthorInfo'>
        <span className='TweetRight__authorInfo__name'>{user.name}</span>
        {/* <span className='TweetRight__authorInfo__handle'> | @{tweetObject.user.handle}</span> */}
        <span className='TweetRight__authorInfo__handle'> | @{user.username}</span>
        <span className='TweetRight__authorInfo__time'> · {hoursAgo}h</span>
      </div>

      <div className='TweetContent'>
        <span className='TweetContent__text'>{tweetObject.content}</span>
      </div>

      <div className='TweetActions'>
        <div className='TweetActions__left'>[Placeholder for media]</div>
      </div>
    </div>
  )
}

export default TweetRight
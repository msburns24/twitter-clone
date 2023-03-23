import React from 'react'

function TweetRight({ tweetObject, users }) {
  const user = users.find(user => user.id === tweetObject.user_id)

  let authorName, authorHandle
  if (user) {
    authorName = user.name
    authorHandle = user.username
  }

  let timestamp
  const tweetDate = new Date(tweetObject.created_at)
  const now = new Date()
  if ((now - tweetDate) < (1000*60)) {
    timestamp = 'Just now'
  } else if ((now - tweetDate) < (1000*60*60)) {
    timestamp = `${Math.floor((now - tweetDate) / (1000*60))}m`
    
  } else if ((now - tweetDate) < (1000*60*60*24)) {
    timestamp = `${Math.floor((now - tweetDate) / (1000*60*60))}h`

  } else if ((now - tweetDate) < (1000*60*60*24*7)) {
    timestamp = `${Math.floor((now - tweetDate) / (1000*60*60*24))}d`

  } else {
    timestamp = `${tweetDate.getMonth() + 1}/${tweetDate.getDate()}/${tweetDate.getFullYear()}`
  }

  return (
    <div className='TweetRight' id={`tweet-${tweetObject.id}`}>
      <div className='TweetAuthorInfo'>
        <span className='TweetRight__authorInfo__name'>{authorName}</span>
        <span className='TweetRight__authorInfo__handle'> | @{authorHandle}</span>
        <span className='TweetRight__authorInfo__time'> · {timestamp}</span>
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
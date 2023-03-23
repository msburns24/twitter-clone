import React, { useState, useEffect } from 'react'
import FeedNewTweet from './FeedNewTweet'
import Tweet from './Tweet'

function FeedTweets() {
  const [users, setUsers] = useState([])
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    fetch('/api/v1/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
      })
    
    fetch('/api/v1/tweets')
      .then((response) => response.json())
      .then((data) => {
        setTweets(data)
      })
  }, [])

  const addTweet = (newTweet) => {
    setTweets([newTweet, ...tweets])
  }

  return (
    <div id='FeedTweets'>
      <FeedNewTweet addTweet={addTweet} />
      {tweets.map((tweetObject) => {
        return <Tweet tweetObject={tweetObject} users={users} />
      })}
    </div>
  )
}

export default FeedTweets
import React, { useState, useEffect } from 'react'
import FeedNewTweet from './FeedNewTweet'
import Tweet from './Tweet'

function FeedTweets() {
  const [users, setUsers] = useState([])
  const [tweets, setTweets] = useState([])

  function refreshUsers() {
    fetch('/api/v1/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
      })
  }

  function refreshTweets() {
    fetch('/api/v1/tweets')
      .then((response) => response.json())
      .then((data) => {
        setTweets(data)
      })
  }

  // Refresh tweets upon page load
  useEffect(() => {
    refreshUsers()
    refreshTweets()
  }, [])

  return (
    <div id='FeedTweets'>
      <FeedNewTweet />
      {tweets.map((tweetObject) => {
        return <Tweet tweetObject={tweetObject} users={users} />
      })}
    </div>
  )
}

export default FeedTweets
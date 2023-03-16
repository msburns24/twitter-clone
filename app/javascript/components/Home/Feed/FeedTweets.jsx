import React, { useState } from 'react'
import FeedNewTweet from './FeedNewTweet'
import Tweet from './Tweet'

function FeedTweets() {
  [tweetTestText, setTweetTestText] = useState('')
  
  fetch('https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1')
    .then(response => response.json())
    .then(data => {
      setTweetTestText( data[0] )
    })
    .catch(error => console.log(error))

  return (
    <div id='FeedTweets'>
      <FeedNewTweet />
      <Tweet text={tweetTestText} />
    </div>
  )
}

export default FeedTweets
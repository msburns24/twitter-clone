import React, { useState } from 'react'
import FeedNewTweet from './FeedNewTweet'
import Tweet from './Tweet'

function FeedTweets() {
  const tweetTestText = `
  Bacon ipsum dolor amet short loin pork belly chislic kevin beef ribs ham cupim shankle jerky capicola filet mignon landjaeger cow drumstick. Biltong burgdoggen strip steak sausage kielbasa jerky turkey pancetta porchetta alcatra filet mignon. 
  `

  // Fetch tweets from API at /api/v1/tweets
  fetch('/api/v1/tweets')
    .then((response) => response.json())
    .then((data) => testMethod(data[0]))


  function testMethod(myInput) {
    console.log("The date from Rails API:", myInput.created_at)
    console.log("Parsed date:", new Date(myInput.created_at))
  }

  const testTweetObject =  {
    id: 1,
    text: tweetTestText,
    user: {
      id: 1,
      name: 'Matt Burns',
      handle: 'msburns24'
    },
    tweetTime: new Date(2023, 2, 17, 7, 0, 0)
  }

  const [tweets, setTweets] = useState([testTweetObject])

  const addTweet = (newTweet) => {
    setTweets([newTweet, ...tweets])
  }

  return (
    <div id='FeedTweets'>
      <FeedNewTweet addTweet={addTweet} />
      {tweets.map((tweetObject) => {
        return <Tweet tweetObject={tweetObject} />
      })}
    </div>
  )
}

export default FeedTweets
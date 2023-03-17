import React, { useState } from 'react'
import FeedNewTweet from './FeedNewTweet'
import Tweet from './Tweet'

function FeedTweets() {
  const tweetTestText = `
  Bacon ipsum dolor amet short loin pork belly chislic kevin beef ribs ham cupim shankle jerky capicola filet mignon landjaeger cow drumstick. Biltong burgdoggen strip steak sausage kielbasa jerky turkey pancetta porchetta alcatra filet mignon. 
  `
  const tweetObject =  {
    id: 1,
    text: tweetTestText,
    user: {
      id: 1,
      name: 'Matt Burns',
      handle: 'msburns24'
    },
    tweetTime: new Date(2023, 2, 17, 7, 0, 0)
  }

  const [tweets, setTweets] = useState([tweetObject])

  return (
    <div id='FeedTweets'>
      <FeedNewTweet />
      <Tweet tweetObject={tweets[0]} text={tweetTestText} />
      <Tweet tweetObject={tweets[0]} text={tweetTestText} />
      <Tweet tweetObject={tweets[0]} text={tweetTestText} />
    </div>
  )
}

export default FeedTweets
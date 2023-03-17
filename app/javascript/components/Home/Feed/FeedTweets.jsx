import React, { useState } from 'react'
import FeedNewTweet from './FeedNewTweet'
import Tweet from './Tweet'

function FeedTweets() {
  const tweetTestText = `
  Bacon ipsum dolor amet short loin pork belly chislic kevin beef ribs ham cupim shankle jerky capicola filet mignon landjaeger cow drumstick. Biltong burgdoggen strip steak sausage kielbasa jerky turkey pancetta porchetta alcatra filet mignon. 
  ` 

  return (
    <div id='FeedTweets'>
      <FeedNewTweet />
      <Tweet text={tweetTestText} />
      <Tweet text={tweetTestText} />
      <Tweet text={tweetTestText} />
    </div>
  )
}

export default FeedTweets
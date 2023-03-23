import React, { useState } from 'react'
import ProfilePicSm from '../../shared/ProfilePicSm'

function FeedNewTweet() {
  const [tweetText, setTweetText] = useState('')

  function testPostRqst(tweetText) {
    const csrf = document.querySelector('[name=csrf-token]').content
    fetch('/api/v1/tweets/', {
        method: 'POST',
        headers: {
          'X-CSRF-Token': csrf,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "tweet_text": tweetText }),
      })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
  }

  const handleTweetText = (e) => {
    // Only allow 280 characters
    if (e.target.value.length > 280) {
      return
    }

    // Resize input to fit text
    e.target.style.height = 'inherit'
    e.target.style.height = `${e.target.scrollHeight}px`

    setTweetText(e.target.value)
  }

  const handleTweet = (e) => {
    e.preventDefault()
    if (tweetText === '') {
      return
    }
    // addTweet(newTweet)
    testPostRqst(tweetText)
    setTweetText('')
  }

  return (
    <form id='FeedNewTweet' className='Tweet' onSubmit={handleTweet} >
      <ProfilePicSm />
      
      <div className='TweetRight' id='newTweetRight'>
        <div className='TweetContent'>
          <textarea className='TweetContent__input' type='text' placeholder="What's happening?" value={tweetText} onChange={handleTweetText} />
        </div>

        <div className='TweetActions'>
          <div className='TweetActions__left'>[Placeholder for media]</div>
          <div className='TweetActions__right'>
            <button type='submit' className='TweetActions__right__post'>Tweet</button>
          </div>
        </div>
      </div>

    </form>
  )
}

export default FeedNewTweet
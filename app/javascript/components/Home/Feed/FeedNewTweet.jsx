import React, { useState } from 'react'
import ProfilePicSm from '../../shared/ProfilePicSm'

function FeedNewTweet({ addTweet }) {

  const [tweetText, setTweetText] = useState('')

  const handleTweetText = (e) => {
    setTweetText(e.target.value)
  }

  const handleTweet = (e) => {
    e.preventDefault()
    if (tweetText === '') {
      return
    }

    const newTweet = {
      id: 2,
      text: tweetText,
      user: {
        id: 1,
        name: 'Matt Burns',
        handle: 'msburns24'
      },
      tweetTime: new Date()
    }
    addTweet(newTweet)
    setTweetText('')
  }

  return (
    <form id='FeedNewTweet' className='Tweet' onSubmit={handleTweet} >
      <ProfilePicSm />
      
      <div className='TweetRight' id='newTweetRight'>
        <div className='TweetContent'>
          <input className='TweetContent__input' type='text' placeholder="What's happening?" value={tweetText} onChange={handleTweetText} />
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
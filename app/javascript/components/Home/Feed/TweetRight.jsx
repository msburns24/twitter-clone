import React from 'react'
import TweetAuthorInfo from './TweetAuthorInfo'

function TweetRight({ isNewTweet, tweetObject }) {

  // Setup ID for TweetRight div
  const tweetElID = (() => {
    if (isNewTweet) return 'newTweet'
    return `tweet-${tweetObject.id}`
  })()

  // If tweet is new, add the newTweet class to the TweetRight__authorInfo div
  let tweetAuthorInfoClass = 'TweetRight__authorInfo'
  if (isNewTweet) {
    tweetAuthorInfoClass += ' newTweet'
  }

  // If tweet is new, render a blank TweetAuthorInfo div
  // Otherwise, render the TweetAuthorInfo component
  let tweetAuthorInfo = null
  if (isNewTweet) {
    tweetAuthorInfo = (
      <div className={tweetAuthorInfoClass}></div>
    )
  } else {
    tweetAuthorInfo = (
      <TweetAuthorInfo tweetObject={tweetObject} />
    )
  }      

  // If tweet is new, render the input field
  // Otherwise, render the tweet text
  let tweetContent = null
  if (isNewTweet) {
    tweetContent = (
      <div className='TweetContent'>
        <input className='TweetContent__input' type='text' placeholder="What's happening?" />
      </div>
    )
  } else {
    tweetContent = (
      <div className='TweetContent'>
        <span className='TweetContent__text'>{tweetObject.text}</span>
      </div>
    )
  }

  // ##############################################################
  const hoursAgo = (() => {
    if (isNewTweet) return null
    return Math.floor((new Date() - tweetObject.tweetTime) / 1000 / 60 / 60)
  })()
  // ##############################################################

  // If tweet is new, render the tweet button
  let tweetButtonContainer = null
  if (isNewTweet) {
    tweetButtonContainer = (
      <div className='TweetActions__right'>
        <button className='TweetActions__right__post'>Tweet</button>
      </div>
    )
  } 

  return (
    <div className='TweetRight' id={tweetElID}>
      {tweetAuthorInfo}

      <div className='TweetContent'>
        {tweetContent}
      </div>

      <div className='TweetActions'>
        <div className='TweetActions__left'>[Placeholder for media]</div>
        {tweetButtonContainer}
      </div>
    </div>
  )
}

export default TweetRight
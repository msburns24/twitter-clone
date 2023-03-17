import React from 'react'
import ProfilePicSm from '../../shared/ProfilePicSm'
import TweetRight from './TweetRight'

function Tweet(props) {
  return (
    <div className='Tweet'>
      <ProfilePicSm />
      <TweetRight text={props.text} />
    </div>
  )
}

export default Tweet
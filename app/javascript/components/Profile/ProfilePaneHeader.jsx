import React from 'react'
import backArrow from '../../images/arrow-left.svg';

function ProfilePaneHeader() {
  return (
    <div className='ProfilePaneHeader'>
      <div className='ProfilePaneHeader__back'>
        <img src={backArrow} className='icon-small' />
      </div>


      <div className='ProfilePaneHeader__info'>
        <div className='ProfilePaneHeader__name'>Matt Burns</div>
        <div className='ProfilePaneHeader__tweetCount'>38 Tweets</div>
      </div>
    </div>
  )
}

export default ProfilePaneHeader
import React from 'react'
import ProfilePicSm from '../../shared/ProfilePicSm'

function SuggestedUser() {
  return (
    <div className='SuggestedUser'>
      <ProfilePicSm />
      <div className='SuggestedUser__Right'>
        <div className='SuggestedUserDetails'>
          <div className='SuggestedUserName'>
            Suggested User
          </div>
          <div className='SuggestedUserHandle'>
            @SuggestedUser
          </div>
        </div>
        
        <button className='SuggestedUserFollowButton'>
          Follow
        </button>
      </div>
    </div>
  )
}

export default SuggestedUser
import React from 'react'
import locationIcon from '../../images/location.svg'
import balloon from '../../images/balloon.svg'
import calendar from '../../images/calendar.svg'

function ProfileBody__UserInfo() {
  return (
    <div className='ProfileBody__UserInfo'>
      <div className='ProfileBody__UserInfo__UserTitle'>
        <div className='ProfileBody__UserInfo__name'>Matt Burns</div>
        <div className='ProfileBody__UserInfo__handle'>@msburns24</div>
      </div>

      <div className='ProfileBody__UserInfo__bio'>
        <p>
          Just a man with a plan. And quite a lot of help from ChatGPT.
        </p>
      </div>

      <div className='ProfileBody__UserInfo__Info'>
        <div className='ProfileBody__UserInfo__Info__item'>
          <img src={locationIcon} className='ProfileBody__UserInfo__Info__itemIcon' alt='location icon' />
          <div className='ProfileBody__UserInfo__Info__itemValue'>
            Raleigh, NC
          </div>
        </div>

        <div className='ProfileBody__UserInfo__Info__item'>
          <img src={balloon} className='ProfileBody__UserInfo__Info__itemIcon' alt='balloon icon' />
          <div className='ProfileBody__UserInfo__Info__itemValue'>
            Born June 17, 1996
          </div>
        </div>

        <div className='ProfileBody__UserInfo__Info__item'>
          <img src={calendar} className='ProfileBody__UserInfo__Info__itemIcon' alt='calendar icon' />
          <div className='ProfileBody__UserInfo__Info__itemValue'>
            Joined March 2010
          </div>
        </div>
      </div>

      <div className='ProfileBody__UserInfo__follow'>
        <div className='ProfileBody__UserInfo__follow__item'>
          <span className='ProfileBody__UserInfo__follow__itemValue'>
            1,000
          </span>
          <span className='ProfileBody__UserInfo__follow__itemLabel'>
            Following
          </span>
        </div>

        <div className='ProfileBody__UserInfo__follow__item'>
          <span className='ProfileBody__UserInfo__follow__itemValue'>
            1,000
          </span>
          <span className='ProfileBody__UserInfo__follow__itemLabel'>
            Followers
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProfileBody__UserInfo
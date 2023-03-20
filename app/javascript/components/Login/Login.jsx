import React from 'react'
import emailIcon from '../../images/email.svg'
import passwordIcon from '../../images/lock.svg'
import logoWhiteIcon from '../../images/logo-white.svg'

function Login() {
  return (
    <div className='login-container'>
      <div id='Login'>
        <div className="login-left">
          <img src={logoWhiteIcon} alt="logo" className="icon-60" />
        </div>

        <div className="login-right">
          <h1>Login</h1>

          <form action='/login' method='post'>
            <div className='form-group'>
              <label htmlFor='email'>
                <img src={emailIcon} alt='email' className='icon-40' />
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='form-control'
                placeholder='Email'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>
                <img src={passwordIcon} alt='email' className='icon-30' />
              </label>
              <input
                type='password'
                name='password'
                id='password'
                className='form-control'
                placeholder='Password'
              />
            </div>
            <div className='form-actions'>
              <div className='remember-me'>
                <input type='checkbox' name='remember_me' id='remember_me' />
                <label htmlFor='remember_me'>Remember me</label>
              </div>
              <button type='submit' className='btn btn-primary'>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login
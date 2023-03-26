import React, { useEffect } from 'react'
import emailIcon from '../../images/email.svg'
import passwordIcon from '../../images/lock.svg'
import logoWhiteIcon from '../../images/logo-white.svg'

function Login() {

  function handleLoginFormSubmission(e) {
    e.preventDefault()
    const csrf = document.querySelector('[name=csrf-token]').content
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    fetch('/api/v1/login', {
        method: 'POST',
        headers: {
          'X-CSRF-Token': csrf,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: {"email": email, "password": password} }),
      })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
  }

  return (
    <div className='login-container'>
      <div id='Login'>
        <div className="login-left">
          <img src={logoWhiteIcon} alt="logo" className="icon-80" />
        </div>

        <div className="login-right">
          <div className="container">
            <h1>Login</h1>

            <form onSubmit={handleLoginFormSubmission}>
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

              <div className="signup">
                <p>Don't have an account? <a href="/signup" className="link">Sign up</a></p>
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
    </div>
  );
}

export default Login
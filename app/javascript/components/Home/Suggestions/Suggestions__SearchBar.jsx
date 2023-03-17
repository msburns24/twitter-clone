import React from 'react'
import searchIcon from '../../../images/search.svg'

function Suggestions__SearchBar() {
  return (
    <div id='Suggestions__SearchBar'>
      <img className='Suggestions__SearchBar__icon' src={searchIcon} alt='search icon' />
      <input className='Suggestions__SearchBar__input' type='text' placeholder='Search Twitter' />
    </div>
  )
}

export default Suggestions__SearchBar
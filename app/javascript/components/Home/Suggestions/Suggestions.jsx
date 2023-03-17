import React from 'react'
import Suggestions__SearchBar from './Suggestions__SearchBar'
import SuggestionsTrendList from './SuggestionsTrendList'
import SuggestedUsers from './SuggestedUsers'

function Suggestions() {
  return (
    <div id='Suggestions'>
      <Suggestions__SearchBar />
      <SuggestionsTrendList />
      <SuggestedUsers />
    </div>
  )
}

export default Suggestions
import React from 'react'
import Suggestions__SearchBar from './Suggestions__SearchBar'
import SuggestionsCard from './SuggestionsCard'
import SuggestedTrend from './SuggestedTrend'
import SuggestedUser from './SuggestedUser'
import SuggestionsFooter from './SuggestionsFooter'

function Suggestions() {
  return (
    <div id='Suggestions'>
      <Suggestions__SearchBar />

      <SuggestionsCard>
        <h1 className='SuggestionsCardHeader'>What's Happening</h1>
        <SuggestedTrend />
        <SuggestedTrend />
        <SuggestedTrend />
      </SuggestionsCard>

      <SuggestionsCard>
        <h1 className='SuggestionsCardHeader'>Who to Follow</h1>
        <SuggestedUser />
        <SuggestedUser />
        <SuggestedUser />
      </SuggestionsCard>

      <SuggestionsFooter />
    </div>
  )
}

export default Suggestions
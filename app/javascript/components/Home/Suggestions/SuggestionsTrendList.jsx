import React from 'react'
import SuggestedTrend from './SuggestedTrend'

function SuggestionsTrendList() {
  return (
    <div id='SuggestionsTrendList'>
      <h1 className='TrendListHeader'>What's Happening</h1>
      <SuggestedTrend />
      <SuggestedTrend />
      <SuggestedTrend />
    </div>
  )
}

export default SuggestionsTrendList
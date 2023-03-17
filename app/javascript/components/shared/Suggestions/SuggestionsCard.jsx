import React from 'react'

function SuggestionsCard(props) {
  return (
    <div className='SuggestionsCard'>
      {props.children}
    </div>
  )
}

export default SuggestionsCard
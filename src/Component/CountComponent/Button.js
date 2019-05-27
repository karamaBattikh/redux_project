import React from 'react'
import { connect } from 'react-redux'
import { increment } from '../../actions/counter'

const Button = ({ increment }) => {
  return (
    <div>
      <button onClick={() => increment(1)} > + </button>
      <button onClick={() => increment(-1)} > - </button>
    </div>
  )
}

export default connect(null, { increment })(Button);
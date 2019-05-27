import React from 'react'
import { connect }  from 'react-redux';

const  Count = ({ count = 0 }) => {
  return (
    <div>
      {count} 
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
}) 

export default connect(mapStateToProps)(Count);
import Button from '../components/Button'
import React from 'react'

function ImperativeHandle() {
  return (
    <div className='container d-flex justify-content-center '>
      <button>Button From Parent</button>
      <Button />
    </div>
  )
}

export default ImperativeHandle

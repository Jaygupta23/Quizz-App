import React from 'react'
import {useState} from 'react'
function Button() {
    const [toggle, setToggle] = useState(false)
  return (
    <div className='container'>
      <button onClick={()=>{
        setToggle(!toggle)
      }}>
        Button from Child
      </button>
      {toggle && 
      <strong>Toggle</strong>}
    </div>
  )
}

export default Button

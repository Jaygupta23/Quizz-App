import React, { useEffect, useState } from 'react'
import axios from "axios"
function EffectHooks() {
    const [data, setData] = useState('')
    const [count, setCount] = useState(0)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=> {
          setData(response.data[5].id)
          console.log("heloo world");
        })
    },[count])  
  return (
    <div className='container'>
      <div className="row">
        <div className="col-8">
            <div className='mt-5'>hello world
            <h1>{data}</h1>
            <h1>{count}</h1>
            <button onClick={()=>{
                setCount(count+1)
            }}>click!</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EffectHooks

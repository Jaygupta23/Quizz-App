import React, { useReducer } from 'react'

function ReducerHooks() {
    const reducer = (state,action)=>{
        switch(action.type){
            case "increment": {
                return {count: state.count +1 ,textValue: state.textValue}
            }
            case "toggleText": {
                return {count: state.count, textValue: !state.textValue}
            }
            default: return state;
        }
    }
    const [state, dispatch] =useReducer(reducer, {count:0, textValue: true})
    
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <h1 className='m-3'>{state.count}</h1>
      <button className='btn btn-lg bg-secondary' onClick={()=> {
        dispatch({type: "increment"})
        dispatch({type: "toggleText"})
      }}>Click me</button>
      <h1 className='m-3'>{state.textValue && <p>hello sir!</p>}</h1>
    </div>
  )
}

export default ReducerHooks

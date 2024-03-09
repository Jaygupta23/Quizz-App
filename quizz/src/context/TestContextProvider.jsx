import React , { useState } from 'react'
import Context from './Context'

const TestContextProvider = ({children}) => {
    const [answer, setAnswer] = useState([]);
    const [quizzIndex, setQuizzIndex] = useState(0);
  return (
    <Context.Provider value={{ answer, setAnswer, quizzIndex, setQuizzIndex}}>
    {children}
  </Context.Provider>
  )
}

export default TestContextProvider


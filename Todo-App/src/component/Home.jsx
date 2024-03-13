import React, {useState} from 'react'
import AddTodo from './AddTodo';
import TOdos from './TOdos';


const Home = () => {
    const [input, setInput] = useState("");
    
  return (
    <>
    <AddTodo input={input} setInput={setInput}   />
    <TOdos />
    </>
  )
}

export default Home
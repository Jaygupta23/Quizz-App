import React, { useContext } from 'react'
import userContext from '../contextApi/UserContext'

const Profiler = () => {
    const {user} = useContext(userContext)
    if(!user){
        return <h1> not logged in</h1>
    }
    console.log(user.password);
  return (
    <div>
      <h1>profile: {user.password} </h1>
    </div>
  )
}

export default Profiler

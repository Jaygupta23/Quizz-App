import React, { useState , useContext} from 'react'
import userContext from '../contextApi/UserContext'

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const {setUser , user} = useContext(userContext)
    const handleSubmit = (e)=> {
        e.preventDefault()
        setUser({userName, password})
    }
    console.log(user);
  return (
    <div>
        <h2>Login</h2>
        <input
      type='text'
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      placeholder='UserName'
      />
      <input
      type='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='password'
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

import { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState(" ")

  let msg = ""
  let msgStyle = {}

  if (password === "learning123"){
    msg = "Success! You are a Software Engineer"
    msgStyle ={color: "green"}
  }else if(password === ""){
    msg=""
  }else{
    msg="keep typing the secret password..."
    msgStyle={color: "red"}
  }


  return (
    <>
      <div>
        <input 
        type='password' 
        placeholder='enter password' 
        value={password}
         onChange={(e) =>setPassword(e.target.value)}/>
       <span style={msgStyle}>{msg}</span>
        </div>
    </>
  )
}

export default App

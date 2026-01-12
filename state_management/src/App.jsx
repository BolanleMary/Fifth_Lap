import { useState } from 'react'
import './App.css'


const UserProfile = () =>{

    const [profile, setProfile] = useState({
      name:"Alex",
    age:25,
    bio: "Frontend developer"
  });

  const onChangeHandler = (e) =>{
setProfile(
  ...profile,
  e.target.value)
  }


    
    return<>
    
    <p>{profile.name}--{profile.age} ---{profile.bio}</p>
    

    <form>
        <input name="name" type="text" onChange={onChangeHandler} />
        <input name="number" type="number" onChange= {onChangeHandler}/>
        <input name="text" type="text" onChange={onChangeHandler}/>
        <button>Reset</button>
    </form>
    </>
}

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
    <UserProfile/>
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

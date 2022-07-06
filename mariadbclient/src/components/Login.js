import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const Login=(props)=>{
    const [email,setEmail]=useState("");
    const [password,setPassWord]=useState("");
    const navigate=useNavigate();
    const {data,setData}=props;
    const handleSubmit=(e)=>{
      e.preventDefault();
      axios.post("http://localhost:3080/api/users/login",{
          "Email":email,
          "passwd":password
      }).then((result)=>{
        setData(data=>({
            ...data,
            data:result.data
        }));   
        navigate('/details'); 
      }).catch(error=>{
         console.log(error);
      })
    }
    return(
        <div className="form">
        <form onSubmit={handleSubmit}>
        <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" value={email} required onChange={(e)=>setEmail(e.target.value)} />
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" value={password}required onChange={(e)=>setPassWord(e.target.value)}/>
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
        </form>
        </div>
    )
}

export default Login;

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
const Login = () => {
  const [email, setEmail ]=useState('');
  const [pass,setPass]= useState('');

  const handleSubmit=(e) => {
    e.preventDefault();
      console.log(email);
  }
   
  return (
    <>
    
    <form className="d-flex justify-content-center" onSubmit={handleSubmit}style={{marginTop:"11rem"}}>
      <div className="w-50">
    <center><h1>{`Glad You're Back!`}</h1></center>  
  <div >
    <label htmlFor="email" class="form-label">Email address</label>
    <input  value={email} type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div >
    <label htmlFor="password" class="form-label">Password</label>
    <input value={pass} type="password" class="form-control" id="password" onChange={(e)=>setPass(e.target.value)}/>
  </div>
<br></br>
  <center><button type="submit" class="btn btn-primary">Login</button><br></br><br></br>
  <Link className="btn btn-primary" to="/signup">New to Rapport? Register here.</Link></center>
  
  </div>
</form>
    </>
  )
}

export default Login
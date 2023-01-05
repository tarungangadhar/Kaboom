import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';


const Signup = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [cpass, setCpass] = useState('');
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    if(pass !== cpass) {
      alert("Password should match");      
    } else {

    }

  }
  return (
    <>

      <form className="d-flex justify-content-center" onSubmit={handleSubmit} style={{ marginTop: "5rem" }}>
        <div className="w-50">
          <center><h1>{`Create Your Account`}</h1></center>
          <div>
            <label htmlFor="name" >Enter Your Name</label>
            <input value={name} type="name" class="form-control" id="name" name="email"  onChange={(e) => setName(e.target.value)} />
          </div>
          <div >
            <label htmlFor="email" class="form-label">Email address</label>
            <input value={email} type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div >
            <label htmlFor="password" class="form-label">Password</label>
            <input value={pass} type="password" class="form-control" id="password" onChange={(e) => setPass(e.target.value)} />
          </div>
          <div >
            <label htmlFor="cpassword" class="form-label">Confirm Password</label>
            <input value={cpass} type="password" class="form-control" id="cpassword" onChange={(e) => setCpass(e.target.value)} />
          </div>
          <br></br>
          <center><button type="submit" class="btn btn-primary" >continue</button>
          
          <br></br><br></br>
            <Link className="btn btn-primary" to="/login">Already on Rapport? Login here.</Link></center>

        </div>
      </form>
    </>
  )
}

export default Signup
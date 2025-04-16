import React, { useState } from 'react'
import "./Css/login.css"

function LoginSignUp() {

  const [state, setState] = useState('Login')
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const changeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  }

  const login = async () => {
    console.log("Login function executed", formData);
    let responseData;
    await fetch('https://e-commerce-backend-sme3.onrender.com/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((Response) => Response.json()).then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.errors);
    }
  }

  const signup = async () => {
    console.log("Sign Up function executed", formData);
    let responseData;
    await fetch('https://e-commerce-backend-sme3.onrender.com/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((Response) => Response.json()).then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.errors);
    }
  }

  return (
    <div className="LoginSignUp" >
      <div className="container">
        <h1>{state}</h1>
        <div className="feild">
          {state === "Sign Up" ? <input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Enter Your Name' /> : <></>}
          <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Enter Your Email' />
          <input type="pass" name='password' value={formData.password} onChange={changeHandler} placeholder='Enter Your Password' />
        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        {
          state === "Sign Up" ?
            <p className="alredy-login"> Already have an accounnt <span onClick={() => { setState("Login") }}>Login here</span></p> :
            <p className="alredy-login"> Create an account? <span onClick={() => { setState("Sign Up") }}>Click here</span></p>
        }
        <div className="agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the term of use & privacy policy.</p>

        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
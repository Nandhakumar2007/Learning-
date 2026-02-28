import React from 'react';

import './html.css'
const Login=()=>{
    return(
        <>
        <center><div className='login-card'>
            <h1>WELCOME!</h1>
        <h2>Sign in with email</h2>
        <p>Make a database with json and document with this login</p>
        <form> </form>
            <div className='form-control'>
          <div> 📧<input type="email" placeholder="enter your email"/></div> 
           <div> 🔒<input type="password" placeholder="Enter your password"/></div>
          <div><a href="#" className='forget'>Forgot Password?</a></div> 
           <button type="submit">Login</button>
           </div>
        </div>
    </center>
        
        
        
        </>
    )
}
export default Login;
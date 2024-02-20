import React, { useState } from 'react';
import { signup } from '../api/auth';
export const Signup = () =>{

    const [userdetails, setuserdetails] = useState({email:''
        
    , password:''})

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await signup({ email, password });
          navigate("/Home");
          
        } catch (error) {
          setError('Invalid Data');
        }
      };
    return(
        <div id="signin-page">
            <h1>Sign Up page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>email</label>
                <input id='email' value={userdetails.email}  onChange={(e)=>{setuserdetails({...userdetails , email:e.target.value})}} type='email' required></input>
                <label htmlFor='password'>password</label>
                <input id='password' value={userdetails.password} onChange={(e)=>{setuserdetails({...userdetails , password:e.target.value})}} type='password' required></input>
                <button type='submit' onClick={handleClick} >Signin</button>

            </form>

        </div>
    )
}
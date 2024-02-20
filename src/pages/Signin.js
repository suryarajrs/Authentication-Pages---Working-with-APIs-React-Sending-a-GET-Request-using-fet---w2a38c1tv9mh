import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { signin } from '../api/auth';
import { useHistory } from 'react-router-dom';


export const Signin = ()=>{
    const history = useHistory();
    const navigate = useNavigate();

    const [userdetails, setuserdetails]=useState({email:''
        
        , password:''})

    const [error, setError] = useState('');    


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await signin({ email, password });
          history.push('/home');
          
        } catch (error) {
          setError('Invalid Data');
        }
      };


    return(
        <div id="signin-page">
            <h1>Sign in page</h1>
            <form onSubmit={handleSubmit} >
                <label htmlFor='email'>email</label>
                <input id='email' value={userdetails.email} onChange={(e)=>{setuserdetails({...userdetails , email:e.target.value})}} type='email' required></input>
                <label htmlFor='password'>password</label>
                <input id='password' value={userdetails.password} onChange={(e)=>{setuserdetails({...userdetails , password:e.target.value})}} type='password' required></input>
                <button type='submit'>Signin</button>
                {error && <p className="error-txt">{error}</p>}

            </form>

        </div>
    )
}
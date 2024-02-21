import React from 'react';
import {signup} from "../api/auth.js"
import { useRef,useState } from 'react';
export const Signup = () =>{
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState(false);
    const handleSubmit = (event) =>{
        event.preventDefault();
        const statusPromise = signup({email : emailRef.current.value, password : passwordRef.current.value});
        const status = statusPromise.then(status => status.statusCode).catch(status => status.statusCode);
        if(status === 422)
            setError(true);
    }
    return(
        <div id="signin-page">
            <h1>Sign Up page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" id="email" required />
                <input type="password" id="password" required/>
                <button type="submit">Signup</button>
            </form>
            {error && <p class="error-txt">Wrong email or password</p>}
        </div>
    )
}
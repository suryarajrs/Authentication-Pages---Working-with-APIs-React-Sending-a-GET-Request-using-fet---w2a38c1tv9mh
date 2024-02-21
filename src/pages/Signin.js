import React from 'react';
import {signin} from "../api/auth.js"
import { useRef,useState } from 'react';
export const Signin = ()=>{
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState(false);
    const handleSubmit = (event) =>{
        event.preventDefault();
        const statusPromise = signin({email : emailRef.current.value, password : passwordRef.current.value});
        const status = statusPromise.then(status => status.statusCode).catch(status => status.statusCode);
        if(status === 400)
            setError(true);
    }
    return(
        <div id="signin-page">
            <h1>Sign in page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" id="email" required ref={emailRef} />
                <input type="password" id="password" required ref={passwordRef}/>
                <button type="submit">Signin</button>
            </form>
            {error && <p class="error-txt">Wrong email or password</p>}
        </div>
    )
}
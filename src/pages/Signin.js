// import React from 'react';


// export const Signin = ()=>{
//     return(
//         <div id="signin-page">
//             <h1>Sign in page</h1>

//         </div>
//     )
// }

// src/pages/Signin.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signin } from '../api/auth';

const Signin = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signin({ email, password });
      history.push('/home');
    } catch (error) {
      setError('Wrong email or password');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
        {error && <p className="error-txt">{error}</p>}
      </form>
    </div>
  );
};

export default Signin;
// import React from 'react';
// export const Signup = () =>{
//     return(
//         <div id="signin-page">
//             <h1>Sign Up page</h1>

//         </div>
//     )
// }

// src/pages/Signup.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signup } from '../api/auth';

const Signup = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup({ email, password });
      history.push('/home');
    } catch (error) {
      setError('Invalid Data');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
        <button type="submit">Sign Up</button>
        {error && <p className="error-txt">{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
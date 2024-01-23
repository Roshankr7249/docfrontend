import React, { useState } from 'react';

const Signup = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSignup = async () => {
    if (password === confirmPassword) {
      try {
        const response = await fetch('https://doctorapp-yw5r.onrender.com/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password, confirmPassword }),
        });

        const data = await response.json();

        if (response.ok) {
          setSignupSuccess(true);
          alert('Signup successful!');
        } else {
          alert(`Error: ${data.message}`);
        }
      } catch (error) {
        console.error('Error in signup:', error);
        alert('Error Please try again.');
      }
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="email">email:</label>
          <input
            type="text"
            id="email"
            value={email}
            name="email"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {signupSuccess && <p style={{ color: 'green' }}>Signup successful!</p>}
        <button type="submit" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;

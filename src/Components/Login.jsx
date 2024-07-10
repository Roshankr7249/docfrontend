import React, { useState } from 'react';

 window.adobeDataLayer=window.adobeDataLayer || [];
        window.adobeDataLayer.push({
            event: "landed",
            eventInfo: {
                eventName: "landed"
            },
            custData: {
                custId: "001",
                loginStatus: "logged in"
            },
            page: {
                pageName: "Home",
                pageType: "Home",
                language: "English"
            }
        });

const Login = ({ setIsLogin }) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch('https://doctorapp-yw5r.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setInvalidCredentials(false);
        alert('Login successful!');
      } else {
        setInvalidCredentials(true);
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setInvalidCredentials(true);
      alert('Error during login. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
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
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {invalidCredentials && <p style={{ color: 'red' }}>Invalid Credentials</p>}
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        Don't have an account? <span onClick={() => setIsLogin(false)}>Sign up</span>
      </p>
    </div>
  );
};

export default Login;

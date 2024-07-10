import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
<script src="https://assets.adobedtm.com/21b53c73144b/bd73161192e0/launch-6dd8d4d01c07-development.min.js" async></script>

const App = () => {
  const [login, setLogin] = useState(true);
  // const [signup, setsignup]= useState(true);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login" onClick={() => setLogin(true)}>Login</Link>
          </li>
          <li>
            <Link to="/signup" onClick={() => setLogin(false)}>Signup</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="/login" element={<Login setLogin={setLogin} />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
};

export default App;

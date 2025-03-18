import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Mock login check
      if (username === 'testuser' && password === 'TestPass123') {
        setLoggedIn(true);
      } else {
        alert('Invalid credentials');
      }
    } else {
      // Mock signup
      if (username && email && password) {
        alert('Signup successful! You can now login.');
        setIsLogin(true);
      } else {
        alert('Please fill all fields.');
      }
    }
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <div className="auth-container">
          <div className="tabs">
            <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
            <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Signup</button>
          </div>

          <form onSubmit={handleSubmit}>
            <h2>{isLogin ? 'Login' : 'Signup'}</h2>
            
            {!isLogin && (
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
          </form>
        </div>
      ) : (
        <h1>Welcome, {username}!</h1>
      )}
    </div>
  );
}

export default App;

import React, { useState } from "react";

const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <div className="input-container">
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter username here"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              value={username}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password here"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
            />
          </label>
        </div>
        {state.error && <h1 className="error-message">Error: {state.error}</h1>}
        <div className="form-actions">
          <button className="login-button" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Loginpage;

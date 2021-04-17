import React, { useState } from 'react';

const Login = ({ makeadmin, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form
      className="form-signin"
      onSubmit={(e) => makeadmin(email, password, e)}
    >
      {error && <div className="alert alert-danger">{error}</div>}
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label htmlFor="inputEmail" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="inputEmail"
        className="form-control"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autofocus
      />
      <label htmlFor="inputPassword" className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="inputPassword"
        value={password}
        className="form-control"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Make me admin
      </button>
    </form>
  );
};

export default Login;

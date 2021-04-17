import React, { useState } from 'react';
import Login from '../Login/login';

const Admin = () => {
  const [error, seterror] = useState('');
  const makeadmin = (email, password, e) => {
    e.preventDefault();
    if (
      email &&
      password &&
      email === 'admin@admin.com' &&
      password === 'adminpass'
    ) {
      localStorage.setItem('admin', true);

      window.location.replace('/');
    } else {
      seterror('Wrong Credentials');
    }
  };

  return (
    <div className="container mt-3 ">
      <Login makeadmin={makeadmin} error={error} />
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{' '}
      <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{' '}
      <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br>
    </div>
  );
};

export default Admin;

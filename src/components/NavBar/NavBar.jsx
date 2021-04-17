import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ admin }) => {
  const removeadmin = () => {
    localStorage.removeItem('admin');
    window.location.replace('/');
  };
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none mr-5"
          >
            <h4>CULTURO</h4>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <NavLink
              activeClassName="text-secondary font-weight-bold active_nav"
              exact
              className="nav-link mx-2 text-white"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              activeClassName="text-secondary font-weight-bold active_nav"
              exact
              className="nav-link mx-2 text-white"
              to="/events"
            >
              EVENTS
            </NavLink>
            <NavLink
              activeClassName="text-secondary font-weight-bold active_nav"
              exact
              className="nav-link mx-2 text-white "
              to="/AboutUs"
            >
              ABOUT
            </NavLink>

            {admin && (
              <NavLink
                activeClassName="text-secondary font-weight-bold active_nav"
                exact
                className="nav-link mx-2 text-white"
                to="/events/edit"
              >
                ADD EVENT
              </NavLink>
            )}
            {admin && (
              <NavLink
                activeClassName="text-secondary font-weight-bold active_nav"
                exact
                className="nav-link mx-2 text-white"
                to="/events/user"
              >
                USERS
              </NavLink>
            )}
          </ul>

          <div className="text-end ml-auto">
            {!admin && (
              <Link className="btn btn-outline-warning me-2" to="/admin">
                ADMIN LOGIN
              </Link>
            )}
            {admin && (
              <button
                className="btn btn-outline-warning me-2"
                type="button"
                onClick={removeadmin}
              >
                LOGOUT
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

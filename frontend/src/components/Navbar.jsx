import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ user }) {
  return (
    <div className="navbar">
      <span className="logo">UserRegLogApp</span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li className="listItem">
            <img
              src="https://media.istockphoto.com/vectors/vector-businessman-black-silhouette-isolated-vector-id610003972?s=2048x2048"
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">John Doe</li>
          <li className="listItem">Logout</li>
        </ul>
      ) : (
        <ul className="list">
          <li className="listItem">
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li className="listItem">
            <NavLink className="link" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;

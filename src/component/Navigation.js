import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About us</Link>
        </li>

        <li>
          <Link to="/posts">Posts</Link>
        </li>

        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;



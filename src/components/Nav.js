import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <li>
            <Link to="/">Project</Link>
          </li>
        </li>
        {/* <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;

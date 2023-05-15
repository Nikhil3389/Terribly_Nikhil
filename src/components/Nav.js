import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <li>
            <Link to="/">Terribly Tiny Tales Project</Link>
          </li>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

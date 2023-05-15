import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  let users = [
    { id: 1, name: 'nikhil' },
    { id: 2, name: 'aaka' },
    { id: 3, name: 'ankit' },
    { id: 4, name: 'kataria' },
  ];
  return (
    <div>
        {
            users.map((items) =>
            <div> <Link to={"/user/"+items.id+"/"+items.name}><h3>{items.name}</h3></Link></div>)
        }
      {/* <Link to="/"> Home Page</Link>
      <br />
      <Link to="/about"> About Page</Link> */}
    </div>
  );
}
export default Nav;

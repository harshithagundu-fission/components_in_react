//here we are writing all the links

import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <NavLink
          to={{
            pathname: "/profile",
            search: "?currentPage=1&orderBy=hot",
            hash: "test",
          }}
        //   replace
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
              Profile
              {/* {({isActive}) => isActive ? "active-profile" : "profile-link"} */}
        </NavLink>


        <Link to="/discuss">Discuss</Link>

        <Link to={{
            pathname:"/problemset/shell",
            search:"?page=1",
        
        }}> 
        
        Problemset</Link>
      </nav>
    </>
  );
}

export default NavBar;

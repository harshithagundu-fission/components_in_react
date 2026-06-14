import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const activeClassName = (({isActive}) => isActive? "active-sub-link" : "");

function Discuss(){

  const navigate = useNavigate();                             //this returns a function
  //console.log(typeof(navigate));

  const goToProfile = async () =>{
    await new Promise((resolve) => setTimeout(resolve, 1000));  //this is to delay the navigation. u have to navigate to the profile after 3 secs
    navigate("/profile");                                     //navigate is the function which u got from the useANavigate hook
  };
    return(
        <>
          <div>
            <h1>Discuss PAge</h1>
            <nav className = "sub-navbar">
                <NavLink to = "/discuss/interview-experience" className = {activeClassName}> 
                    Interview Experience
                </NavLink>

                <NavLink to = "/discuss/interview-question">
                    Interview Question
                </NavLink>
            </nav>

            <button onClick={goToProfile}>Go To Profile</button>
             {/* Outlet is used to render the child routes */}
          <Outlet/>
          </div>

           
        </>
    );
}
export default Discuss;
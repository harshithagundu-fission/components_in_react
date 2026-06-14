// displaying of routes in UI
//this is the parent component. because, the components are rendered here(components are called here). 
//also the parent component component will have the data (the names of the students are declared here)

import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx";
import Button from "./Button.jsx";
import ProfilePicture from "./ProfilePicture.jsx"
import MyComponent from "./MyComponent.jsx"
import Myonchange from "./Myonchange.jsx"
import Myobjects from "./Myobjects.jsx"
import Myarrays from "./Myarray.jsx"
import Welcome from "./Welcome.jsx"
import Teacher from "./Teacher.jsx"
import Ueffect from "./Ueffect.jsx"
import Uref from "./Uref.jsx";
import FormExample from "./FormExample.jsx";
import Profile from "./Pages/Profile.jsx";
import Home from "./Pages/Home.jsx";
import NotFound from "./Pages/NotFound.jsx";
import { Routes, Route } from "react-router-dom";
import Discuss from "./Pages/Discuss.jsx";
import Contest from "./Pages/Contest.jsx";
import NavBar from "./Pages/NavBar.jsx";
import Problemset from "./Pages/Problemset.jsx";

function App() {
  
  return(
      <> 

        <NavBar/>

        <Routes>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/problemset/:subjectName" Component={Problemset} />


          {/* Discuss Layout */}
          <Route path="/discuss" element={<Discuss />}>
            <Route index element={<p>Select a discuss topic below.</p>} />
            <Route path="interview-experience" element={<p>Interview experience</p>} />
            <Route path="interview-question" element={<p>interview question</p>} />
            <Route path="*" element={<div>Discuss Page not found</div>} />
          </Route>

          {/* Contest Layout */}
          <Route path="/contest/:contestId/:userId?" element={<Contest />} />

          <Route path="*" element={<NotFound />} />
        </Routes>


      
        <Header/>
        <Footer/>
        <Food/>
        <Student name="Spongebob" age = {30} isStudent={true} />
        <Student name="Patrick" age = {42} isStudent={true} />
        <Student name="john" age = {50} isStudent= {false} />
        <Student/>


        {/*  user greeting */}
        <UserGreeting isLoggedIn={true} username="BroCode"/>

        {/* button */}
        <Button/>

        <ProfilePicture/>

        {/* useState */}
        <MyComponent/>
        
        {/* onchange event handler */}
        <Myonchange/>

        {/* update OBJECTS in state */}
        <Myobjects/>

         {/* update ARRAYS in state */}
         <Myarrays/>

        {/* understanding mount */}
         <Welcome/>

        {/* understanding render */}
         <Teacher/>

        {/* useEffect */}
        <Ueffect/>

        {/* useRef */}
        <Uref/>

        {/* Form Events */}
        <FormExample/>
      </>

  );
  
}

export default App

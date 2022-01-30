import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Compart/NavBar/Navbar";
import Login from "./Components/Pages/Login/Login";
import Registration from "./Components/Pages/Registrationform/Registration"
import Homepage from "./Components/Pages/Homepage/Homepage";
import Event from "./Components/Pages/Event/Event";
import Club from "./Components/Pages/Club/Club";
import Profile from "./Components/Pages/Forms/Profile"
function App() {
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route>
                <Route exact path="/Homepage"  element={<Homepage/>}/>
                <Route exact path="/Login"  element={<Login/>}/>
                <Route exact path="/Registration"  element={<Registration/>}/>
                <Route exact path="/Event"  element={<Event/>}/>
                <Route exact path="/Club"  element={<Club/>}/>
                <Route exact path="/Profile"  element={<Profile/>}/>
                </Route>
            </Routes>
        </Router>
    );
}
export default App;
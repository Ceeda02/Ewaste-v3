import logo from "./logo.svg";
import React from "react";

// Css
import "./App.css";

// Components
import GetStarted from "./components/GetStarted";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Track from "./components/Track";
import Donate from "./components/Donate";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";

// Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Switch,
  Link,
} from "react-router-dom";
import Footer from "./components/Footer";

//HOUSTON WE GOT A PROBLEM

//Make sure the navbar will not be displayed if getstarted is shown, this also applies in
//login or register

function App() {
  // // Define an array of routes where you want to hide the navigation
  // const routesWithoutNavigation = ["/", "/login", "/register"];

  // // Get the current route path
  // const currentPath = window.location.pathname;

  // // Check if the current route is in the routesWithoutNavigation array
  // const hideNavigation = routesWithoutNavigation.includes(currentPath);

  return (
    <>
      {/* Conditionally render the navigation
      {!hideNavigation && <Navigation />} */}

      <Navigation />
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Track" element={<Track />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

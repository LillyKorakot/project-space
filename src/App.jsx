import "./App.css";
import React from "react";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Destination from "./component/Destination";
import Crew from "./component/crew";
import Technology from "./component/Technology";

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    {/* <Destination/> */}
    <Crew/>
    <Technology/>
    </>
  )
}

export default App;

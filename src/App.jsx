import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Working from "./Components/Working";
import Working1 from "./Components/Working1";
import Working2 from "./Components/Working2";
import Sidebar from "./Components/Sidebar";
import Education from "./Components/Education";
import Certification from "./Components/Certification";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="my-3 mybord">
      <div className=" main ">
        <Navbar></Navbar>
        <Header></Header>
        <div className="text-start">
          <a className="">Let's Connect!!</a>
        </div>
        <div className="d-flex">
          <div className=" text-start  work ">
            <h5 className="">Working History</h5>
            <Working></Working>
            <Working1></Working1>
            <Working2></Working2>
          </div>
          <Sidebar></Sidebar>
          
        </div>
        <Education></Education>
        <Certification></Certification>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

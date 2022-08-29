import React, { useState, useEffect } from "react";
import Navbar from "../Navs/Navbar";
import Exercises from "../Exercises/Exercises";
const Home = () => {  
  return (
    <>
    <div className="bg-black h-screen">
      <Exercises/>
    </div>
    </>
  );
};

export default Home;

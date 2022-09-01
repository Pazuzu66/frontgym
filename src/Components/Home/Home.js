import React from "react";
import Exercises from "../Exercises/Exercises";
const Home = () => {  
  return (
    <>
    <div className="bg-black h-screen">
      <button className="bg-red-500 fixed top-0 right-0">
        Log out
      </button>
      <Exercises/>
    </div>
    </>
  );
};

export default Home;

import React from "react";
import "./Herosection.css";
import Navbar from "./Navbar";

const Herosection = () => {
  return (
    <div className="home-bg">
      <Navbar />
      <div className=" flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-2xl font-normal text-white ">
          Welcome to
          <span className="font-bold"> SRITECH Software Services</span>
        </h1>

        <p className="text-white">
          Collaboration, a tried-and-true process, and deep and long-lasting
          results
        </p>
        <img src="./hero-image.png" alt="" />
      </div>
    </div>
  );
};

export default Herosection;

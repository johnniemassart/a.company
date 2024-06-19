import React from "react";
import "../css/Home.css";
import LogInOrSignUp from "../components/Home/LogInOrSignUp";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "../p5js/sketch";

const Home = () => {
  return (
    <ReactP5Wrapper sketch={sketch}>
      <div className="home_wrapper">
        <LogInOrSignUp />
      </div>
      <p className="home_msg">founded, @2024.</p>
    </ReactP5Wrapper>
  );
};

export default Home;

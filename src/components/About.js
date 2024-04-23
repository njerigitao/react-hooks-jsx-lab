import React from "react";
import { image } from "../data/data";

function About() {
  return <div>About
    <h2>About Me</h2>
    <p>I love using React!!</p>
    <img src="{ image }" alt="I made this"></img>
  </div>;
}

export default About;

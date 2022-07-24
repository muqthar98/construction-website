import React from "react";
import About from "./About";
import Residential from "./residential";
import Contact from "./contact";
import Hero from "./hero";
import Projects from "./projects";

function Main() {
  return (
    <main className={``}>
      <Hero />

      <About />

      <Projects />

      <Residential/>

      <Contact />
    </main>
  );
}

export default Main;

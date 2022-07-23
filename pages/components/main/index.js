import React from "react";
import About from "./About";
import Contact from "./contact";
import Hero from "./hero";
import Projects from "./projects";

function Main() {
  return (
    <main className={``}>
      <Hero />

      <About />

      <Projects />

      <Contact />
    </main>
  );
}

export default Main;

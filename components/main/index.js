import React from "react";
import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import Projects from "./projects";

function Main() {
  return (
    <main className={``}>
      <Hero />

      <Projects/>

      <About />

      <Contact />
    </main>
  );
}

export default Main;

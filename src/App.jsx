import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Skill from "./components/skills";
import Projects from "./components/projects";
import Card from "./components/card";
import Contact from "./components/contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Card />
        <Skill />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
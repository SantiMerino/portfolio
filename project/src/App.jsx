import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Skill from "./components/skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Skill />
      <Footer />
    </>
  );
}

export default App;

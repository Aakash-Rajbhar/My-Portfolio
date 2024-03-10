import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Services from "./components/services/Services.jsx";
import Qualification from "./components/qualification/Qualification.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import ScrollUp from "./components/scrollup/ScrollUp.jsx";
import Projects from "./components/projects/Projects.jsx";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 400,
  offset: 100,
  easing: "ease-in-sine",
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Projects/>
        <Contact/>
      </main>
        <Footer/>
        <ScrollUp/>
    </>
  );
}

export default App;

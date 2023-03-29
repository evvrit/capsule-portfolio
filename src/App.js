// Lazy load
import React from "react";
// Router
import { Routes, Route, useLocation } from "react-router-dom";
// Animations
import { AnimatePresence } from "framer-motion";
// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { faGit } from "@fortawesome/free-brands-svg-icons/faGit";
import { faSass } from "@fortawesome/free-brands-svg-icons/faSass";
import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faFigma } from "@fortawesome/free-brands-svg-icons/faFigma";
import { faPython } from "@fortawesome/free-brands-svg-icons/faPython";
import { faWordpress } from "@fortawesome/free-brands-svg-icons/faWordpress";
import { faElementor } from "@fortawesome/free-brands-svg-icons/faElementor";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
//Pages
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import OurWork from "./pages/MyWork";
import Project from "./pages/Project";

function App() {
  library.add(
    faReact,
    faGit,
    faSass,
    faJs,
    faGithub,
    faHtml5,
    faFigma,
    faWordpress,
    faElementor,
    faLinkedin,
    faPython
  );
  // routing
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Routes key={location.pathname} location={location}>
          <Route exact path="/" element={<AboutUs />} />
          <Route exact path="/work" element={<OurWork />} />
          <Route exact path="/work/:id" element={<Project />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

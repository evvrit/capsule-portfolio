//Pages
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Contact from "./pages/ContactUs";
import OurWork from "./pages/MyWork";
import Project from "./pages/Project";
// Router
import { Routes, Route, useLocation } from "react-router-dom";
// Animations
import { AnimatePresence } from "framer-motion";
// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

function App() {
  // icons library
  library.add(fab);

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

//Pages
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Contact from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Movie from "./pages/Movie";
// Router
import { Routes, Route, useLocation } from "react-router-dom";
// Animations
import { AnimatePresence } from "framer-motion";
// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faGit,
  faSquareGithub,
  faFigma,
  faReact,
  faSass,
  faJs,
  faPython,
  faWordpress,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  library.add(
    faGit,
    faSquareGithub,
    faFigma,
    faReact,
    faSass,
    faJs,
    faPython,
    faWordpress,
    faHtml5
  );
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Routes key={location.pathname} location={location}>
          <Route exact path="/" element={<AboutUs />} />
          <Route exact path="/work" element={<OurWork />} />
          <Route exact path="/work/:id" element={<Movie />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

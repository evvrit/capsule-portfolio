// Lazy load
import React, { lazy, Suspense } from "react";
// Router
import { Routes, Route, useLocation } from "react-router-dom";
// Animations
import { AnimatePresence } from "framer-motion";

//Pages
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/ContactUs"));
const OurWork = lazy(() => import("./pages/MyWork"));
const Project = lazy(() => import("./pages/Project"));

function App() {
  // routing
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Suspense fallback={null}>
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Routes key={location.pathname} location={location}>
            <Route exact path="/" element={<AboutUs />} />
            <Route exact path="/work" element={<OurWork />} />
            <Route exact path="/work/:id" element={<Project />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </div>
  );
}

export default App;

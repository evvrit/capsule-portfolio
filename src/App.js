//Pages
import AboutUs from "./pages/aboutUs";
import GlobalStyle from "./components/globalStyle";
import Nav from "./components/Nav";
import Contact from "./pages/contactUs";
import OurWork from "./pages/ourWork";
import Movie from "./pages/Movie";
// Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route exact path="/" element={<AboutUs />} />
        <Route exact path="/work" element={<OurWork />} />
        <Route exact path="/work/:id" element={<Movie />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

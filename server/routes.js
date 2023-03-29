import express from "express";

const router = express.Router();
//pages
import About from "../src/pages/AboutUs";
import Work from "../src/pages/MyWork";
import Project from "../src/pages/Project";
import Contact from "../src/pages/ContactUs";

router.get("/", (req, res) => {
  res.send(<About />);
});
router.get("/work", (req, res) => {
  res.send(<Work />);
});
router.get("/work/$", (req, res) => {
  res.send(<Project />);
});
router.get("/contact", (req, res) => {
  res.send(<Contact />);
});

module.exports = router;

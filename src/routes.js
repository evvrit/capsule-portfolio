import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MyWork from "./pages/MyWork";
import Project from "./pages/Project";

const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  next();
});
router.get("/", (req, res) => {
  res.send(AboutUs);
});
router.get("/work", (req, res) => {
  res.send(MyWork);
});
router.get("/work/:id", (req, res) => {
  res.send(Project);
});
router.get("/contact", (req, res) => {
  res.send(ContactUs);
});

module.exports = router;

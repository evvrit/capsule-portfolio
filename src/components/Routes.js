import React from "react";
import { Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";

export default () => {
  return (
    <div>
      <Route exact path="/" element={AboutUs} />
    </div>
  );
};

import React, { useState } from "react";
import { m, LazyMotion, domMax } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <LazyMotion features={domMax} strict>
      <m.div layout className="question" onClick={() => setToggle(!toggle)}>
        <m.h4 layout>{title}</m.h4>
        {toggle ? children : ""}
        <div className="bookend-line"></div>
      </m.div>
    </LazyMotion>
  );
};

export default Toggle;

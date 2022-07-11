import React from "react";

function Heading({ primary, text }) {
  return <div style={{ fontSize: primary ? "3rem" : "1.8rem" }}>{text}</div>;
}

export default Heading;

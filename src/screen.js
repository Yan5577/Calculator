import React from "react";
import "./screen.css";

const Screen = ({ value }) => {
  return (
    <input type="text" className="display" value={value} />
  );
};

export default Screen;

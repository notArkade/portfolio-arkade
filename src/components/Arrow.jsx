import React from "react";
import "./Arrow.scss";
import { Link as LinkScroll } from "react-scroll";

const Arrow = () => {
  return (
    <LinkScroll 
    to="status"
    smooth
    className="arrow-container relative mt-20">
      <div class="arrow"></div>
      <div class="arrow"></div>
      <div class="arrow"></div>
    </LinkScroll>
  );
};

export default Arrow;

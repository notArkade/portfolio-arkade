import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Nav from "../components/Nav";

const Header = () => {
  return (
    <div>
        <h1 className="absolute text-white top-7 left-7 text-3xl">Arkade</h1>
      <Nav />
    </div>
  );
};

export default Header;

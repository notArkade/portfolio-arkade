import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Nav from "../components/Nav";

const Header = () => {
  return (
    <header className="border-2 border-amber-400">
      <h1 className="absolute text-white top-10 left-10 text-3xl">Arkade</h1>
      <Nav />
    </header>
  );
};

export default Header;

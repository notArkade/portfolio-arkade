import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Nav from "../components/Nav";

const Header = () => {
  return (
    <header className="border-2 border-amber-400">
      <Nav />
      <h1 className="static text-white m-5 text-3xl">Arkade</h1>
    </header>
  );
};

export default Header;

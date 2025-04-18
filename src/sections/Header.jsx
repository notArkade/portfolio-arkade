import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Nav from "../components/Nav";

const Header = () => {
  
  return (
    <section className="overflow-hidden">
    <header>
      {/* <h1 className="absolute text-white m-5 mt-7 text-3xl space-mono">Arkade</h1> */}
      <Nav />
    </header>
    </section>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Nav from "../components/Nav";

const Header = () => {
  
  return (
    <section className="overflow-hidden">
    <header>
      <h1 className="absolute text-black m-5 text-3xl bg-cyan-300 [clip-path:polygon(0%_0%,100%_0%,100%_80%,90%_100%,0%_100%,0%_0%)] p-2">Arkade</h1>
      <Nav />
    </header>
    </section>
  );
};

export default Header;

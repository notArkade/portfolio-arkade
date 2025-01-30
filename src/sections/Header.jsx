import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Nav from "../components/Nav";

const Header = () => {
  return (
    <section className="overflow-hidden">
    <header>
      <Nav />
      <h1 className="static text-white m-5 text-3xl">Arkade</h1>
    </header>
    </section>
  );
};

export default Header;

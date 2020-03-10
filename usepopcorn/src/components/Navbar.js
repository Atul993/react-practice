import React, { useState } from "react";
import Search from "./Search";
import Logo from "./Logo";
import NumResults from "./NumResults";

function Navbar({ movies }) {
  return (
    <div>
      <nav className="nav-bar">
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </nav>
    </div>
  );
}

export default Navbar;
